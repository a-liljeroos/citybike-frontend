import { URL, QUERY_KEY } from "../../../../constants";
import { TUser } from "../../../../Types";
import { useMutation, UseMutateFunction, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

async function createAccount(
  username: string,
  password: string,
  repeatPassword: string,
  email?: string
): Promise<TUser> {
  const response = await fetch(`${URL}/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, repeatPassword, email }),
  });
  if (!response.ok) throw new Error("Error creating account");
  if (response.status === 409) throw new Error("Username already exists");

  return await response.json();
}

type ICreateAccount = UseMutateFunction<
  TUser,
  Error,
  {
    username: string;
    password: string;
    repeatPassword: string;
    email?: string;
  },
  unknown
>;

export function useCreateAccount(): ICreateAccount {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createAccountMutation } = useMutation<
    TUser,
    Error,
    {
      username: string;
      password: string;
      repeatPassword: string;
      email?: string;
    },
    unknown
  >(
    ({ username, password, repeatPassword, email }) =>
      createAccount(username, password, repeatPassword, email),
    {
      onSuccess: (data) => {
        queryClient.setQueryData([QUERY_KEY.user], data);
        toast.success("Account created successfully!");
        navigate(-1);
      },
      onError: (error) => {
        toast.error("Ops.. Error on sign up. Try again!");
      },
    }
  );

  return createAccountMutation;
}
