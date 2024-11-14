import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../functions/useFetch";
import apiRequest from "../functions/requestApi";
const Signup = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [varifyPassword, setVarifyPassword] = useState(null);
  const [users] = useFetch("users");
  const navigate = useNavigate();

  async function handleSignup() {
    const newUser = {
      id: `${users.length + 1}`,
      name: "",
      username: username,
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "",
      website: password,
      company: { name: "", catchPhrase: "", bs: "" },
    };
    const postRequset = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    users.find((user) => user.name === username)
      ? alert("user name unavilable. try a diffrent one")
      : navigate("/home");

    const result = await apiRequest("users", postRequset);
    if (result) {
      alert("something went wrong");
    }

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setCurrentUser(newUser);
    navigate("/home");
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
