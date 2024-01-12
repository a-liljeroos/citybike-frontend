import { FormEventHandler, useState } from "react";
import { useCreateAccount } from "./useCreateAccount";
// components
import FormCarousel from "../../Components/FormCarousel";
import { Page } from "../../../../components/index";

const CreateAccount = () => {
  const createAccount = useCreateAccount();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onCreateAccount: FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault();
    const formData = new FormData(form.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");
    const email = formData.get("email");

    if (
      typeof username === "string" &&
      typeof password === "string" &&
      typeof repeatPassword === "string" &&
      typeof email === "string"
    ) {
      createAccount({
        username,
        password,
        repeatPassword,
        email,
      });
    }
  };
  return (
    <Page>
      <FormCarousel page={2}>
        <div className="form-container">
          <form className="user-form" onSubmit={onCreateAccount}>
            <label htmlFor="username">
              Username{" "}
              <span
                style={{
                  color:
                    username.length >= 5
                      ? "rgb(90, 247, 150)"
                      : "rgb(255, 96, 96)",
                }}
              >
                *
              </span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              minLength={5}
              maxLength={18}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <label htmlFor="password">
              Password{" "}
              <span
                style={{
                  color:
                    password.length >= 8
                      ? "rgb(90, 247, 150)"
                      : "rgb(255, 96, 96)",
                }}
              >
                *
              </span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              minLength={8}
              maxLength={32}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="repeatPassword">
              Repeat Password{" "}
              <span
                style={{
                  color:
                    password.length >= 8
                      ? "rgb(90, 247, 150)"
                      : "rgb(255, 96, 96)",
                }}
              >
                *
              </span>
            </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Repeat Password"
              minLength={8}
              maxLength={32}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />

            <button type="submit">Create Account</button>
          </form>
        </div>
      </FormCarousel>
    </Page>
  );
};

export default CreateAccount;
