import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [varifyPassword, setVarifyPassword] = useState(null);
  const [data] = useFetch("users");
  const navigate = useNavigate();

  function handleSignup() {
    data.find((user) => user.name === username)
      ? alert("user name unavilable. try a diffrent one")
      : navigate("/home");
  }

  return (
    <div>
      <h1>Signup</h1>
      <h1>Login Here!</h1>
      <label htmlFor="username">Username:</label>
      <br />
      <input
        type="text"
        className="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="password">PassWord:</label>
      <br />
      <input
        type="text"
        className="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="password">Varify PassWord:</label>
      <br />
      <input
        type="text"
        className="password"
        onChange={(e) => {
          e.target.value !== password
            ? setVarifyPassword(
                <span style={{ color: "red" }}>not the same as password</span>
              )
            : setVarifyPassword(null);
        }}
      />
      <br />
      {varifyPassword}
      <br />
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
