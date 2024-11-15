import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Home = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#3339b3",
  };
  const handleLogout = () => {
    localStorage.setItem("currentUser", {});
    setCurrentUser({});
    navigate("/login");
  };
  return (
    <div>
      <header>
        <h4>Hello, {currentUser.username ? currentUser.username : "guest"} </h4>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/home"
          end
        >
          {" "}
          info
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="todos"
        >
          {" "}
          Todos
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="posts"
        >
          {" "}
          Posts
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="albums"
        >
          {" "}
          Albums
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
