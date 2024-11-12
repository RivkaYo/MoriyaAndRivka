import React, { useState } from "react";
import useFetch from "../useFetch";
import { json } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data] =useFetch("users")
  function handleLogin(){
    try{
      const currentUser=data.find((user)=>user.name === username)
      if(!currentUser)throw new Error ("wrong user name or password");
      if(currentUser.website !== password) throw new Error ("wrong user name or password");
      console.log('password: ', password);
      console.log('currentUser.website: ', currentUser.website);
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }catch (err){
    console.log('err: ', err.message);
        
      }
    
  }
  return (
    <div>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input type="text" className="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      {console.log('username: ', username)}
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input type="text" className="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Log In</button>
      <br></br>
      <button>Move to Sign up page</button>
    </div>
  );
};

export default Login;
