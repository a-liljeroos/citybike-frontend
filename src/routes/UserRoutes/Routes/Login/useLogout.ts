import { toasterMsg } from "../../../../components/index";
import { TUser } from "../../../../Types";
import { URL, QUERY_KEY } from "../../../../constants";
import { useAuthContext } from "../../../../AuthContext";
import { useMutation, UseMutateFunction, useQueryClient } from "react-query";

type IuseLogOut = UseMutateFunction<
  ILogoutResponse,
  Error,
  { user: TUser | null; token: string | null },
  unknown
>;

export function useLogout(): IuseLogOut {
  const queryClient = useQueryClient();
  const { logout } = useAuthContext();

  const { mutate: logOutMutation } = useMutation<
    ILogoutResponse,
    Error,
    { user: TUser | null; token: string | null },
    unknown
  >(({ user, token }) => logOut(user, token), {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.user]);
      logout();
    },
    onError: (error) => {
      toasterMsg.logoutFailed();
    },
  });

  return logOutMutation;
}

type ILogoutResponse = {
  message: string;
};

async function logOut(
  user: TUser | null,
  token: string | null
): Promise<ILogoutResponse> {
  const response = await fetch(`${URL}/user/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error("Failed on logout.");

  return await response.json();
}
