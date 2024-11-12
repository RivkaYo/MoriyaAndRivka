import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, seUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input type="text" className="username" value={username} />
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input type="text" className="password" value={password} />
      <br></br>
      <br></br>
      <button>Log In</button>
      <br></br>
      <button>Move to Sign up page</button>
    </div>
  );
};

export default Login;
