import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input type="text" className="username" value={username} />
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input type="text" className="password" value={password} />
      <label htmlFor="password">Varify PassWord:</label>
      <br></br>
      <input type="text" className="password" value={password} />
      <br></br>
      <br></br>
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
