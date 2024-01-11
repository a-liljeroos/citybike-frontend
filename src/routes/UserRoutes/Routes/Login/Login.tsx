import { useLogin } from "./useLogin";
import { FormEventHandler } from "react";
// components
import { Page } from "../../../../components/index";
import FormCarousel from "../../Components/FormCarousel";

const Login = () => {
  const login = useLogin();

  const onLogin: FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault();
    const formData = new FormData(form.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    if (typeof username === "string" && typeof password === "string") {
      login({ username, password });
    }
  };

  return (
    <Page classNames="login-page">
      <FormCarousel page={1}>
        <div className="form-container">
          <form className="user-form" onSubmit={onLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              minLength={5}
              maxLength={18}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              minLength={8}
              maxLength={32}
              required
            />
            <div className="login-link-container">
              <a>Forgot password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </FormCarousel>
    </Page>
  );
};

export default Login;
