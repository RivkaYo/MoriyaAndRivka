import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {}
  return (
    <div>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input
        type="text"
        className="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {console.log("username: ", username)}
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input
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
      <button>Move to Sign up page</button>
    </div>
  );
};

export default Login;
