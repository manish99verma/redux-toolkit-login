import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/userslice";

function App() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ username: "", password: "" });
  const userInStore = useSelector((state) => state.user);

  // Update listener
  useEffect(() => {
    console.log("User Updated: ", userInStore);
  }, [userInStore]);

  // Update user
  const login = (e) => {
    e.preventDefault();
    console.log("Login success: ", form);

    dispatch(updateUser({ name: form.username, isLoggedIn: true }));

    setForm({ username: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={login}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username here"
          value={form.username}
          onChange={(e) => {
            setForm((f) => {
              return { ...f, username: e.target.value };
            });
          }}
        />
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password here"
          value={form.password}
          onChange={(e) => {
            setForm((f) => {
              return { ...f, password: e.target.value };
            });
          }}
        />
        <button type="submit">Login</button>
      </form>
      <div>Please check logs for more details...</div>
    </div>
  );
}

export default App;
