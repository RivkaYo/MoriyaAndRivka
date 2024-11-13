import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useFetch from "../functions/useFetch";

const Home = ({ currentUser, setCurrentUser}) => {
  const navigate= useNavigate()
  const handleLogout=()=>{
    localStorage.setItem("currentUser",{})
    setCurrentUser({})
    navigate("/login");
  }
  return (
    <div>
      <header>
        <h4>Hello, {currentUser.name ? currentUser.name : "guest"} </h4>
        <NavLink to="/home"> info </NavLink>
        <NavLink to="todos"> Todos </NavLink>
        <NavLink to="posts"> Posts </NavLink>
        <NavLink to="Albums"> Albums </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
