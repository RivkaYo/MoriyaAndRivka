import React, { useState } from "react";
import useFetch from "../functions/useFetch";

import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser, currentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users] = useFetch("users");
  const navigate = useNavigate();
  function handleLogin() {
    try {
      setCurrentUser(users.find((user) => user.username === username));
      if (!currentUser) throw new Error("wrong user name or password");
      if (currentUser.website !== password)
        throw new Error("wrong user name or password");
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <h1>Login Here!</h1>
      <h3>Bret</h3>
      <h1>hildegard.org</h1>
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
      <button onClick={() => navigate("/signup")}>Move to Sign up page</button>
    </div>
  );
};

export default Login;
