import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/messageHook";

export const AuthPage = () => {
  const auth = React.useContext(AuthContext);
  const { error, loading, request, clearError } = useHttp();
  const message = useMessage();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    window.M.updateTextFields();
  }, []);

  React.useEffect(() => {
    message(error);
    clearError();
  }, [clearError, error, message]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (error) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      // message(data.message);
      auth.login(data.token, data.userId);
    } catch (error) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Links</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Auth</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow"
              onClick={loginHandler}
              disabled={loading}
            >
              Log in
            </button>
            <button
              className="btn grey"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
