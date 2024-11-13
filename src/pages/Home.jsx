import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useFetch from "../functions/useFetch";

const Home = ({ currentUser }) => {
  // console.log('currentUser: ', currentUser);
  const handleLogout=()=>{
    localStorage.setItem("currentUser",{})
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
