import { toasterMsg } from "../../../../components/index";
import { TUser } from "../../../../Types";
import { URL, QUERY_KEY } from "../../../../constants";
import { useAuthContext } from "../../../../AuthContext";
import { useMutation, UseMutateFunction, useQueryClient } from "react-query";

type ILoginResponse = {
  t: string;
  user: TUser;
};

async function logIn(
  username: string,
  password: string
): Promise<ILoginResponse> {
  const response = await fetch(`${URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error("Failed on login.");

  return await response.json();
}

type IuseLogin = UseMutateFunction<
  ILoginResponse,
  Error,
  { username: string; password: string },
  unknown
>;

export function useLogin(): IuseLogin {
  const queryClient = useQueryClient();
  const { login } = useAuthContext();

  const { mutate: logInMutation } = useMutation<
    ILoginResponse,
    Error,
    { username: string; password: string },
    unknown
  >(({ username, password }) => logIn(username, password), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data.user);
      login(data.t, data.user);
    },
    onError: (error) => {
      toasterMsg.loginFailed();
    },
  });

  return logInMutation;
}
