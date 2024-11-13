import React, { useState } from "react";
import useFetch from "../functions/useFetch";
import { NavLink } from "react-router-dom";

const Login = ({ currUser, setCurrUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data] = useFetch("users");
  console.log("data: ", data);

  async function handleLogin() {
    try {
      const checkedUser = data.find((user) => user.username === username);
      if (!checkedUser) throw new Error("wrong user name or password");
      if (checkedUser.website !== password)
        throw new Error("wrong user name or password");
      localStorage.setItem("currentUser", JSON.stringify(checkedUser));
      setCurrUser(checkedUser);
    } catch (err) {
      console.log("err: ", err.message);
    }
  }
  return (
    <div>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input
        placeholder="Bret"
        type="text"
        className="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input
        placeholder="hildegard.org"
        type="text"
        className="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Log In</button>
      <br></br>
      <button>
        <NavLink to="/signup">Move to Sign up page</NavLink>
      </button>
    </div>
  );
};

export default Login;
