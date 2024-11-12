import React from "react";
import { useState } from "react";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Signup</h1>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input type="text" className="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input type="text" className="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <label htmlFor="password">Varify PassWord:</label>
      <br></br>
      <input type="text" className="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br></br>
      <br></br>
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
