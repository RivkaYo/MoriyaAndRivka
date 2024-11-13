import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useFetch from "../functions/useFetch";

const Home = ({ currUser, setCurrUser }) => {
  return (
    <div>
      <header>
        <h4>{currUser.name}</h4>
        <NavLink to="/home"> info </NavLink>
        <NavLink to="todos"> Todos </NavLink>
        <NavLink to="posts"> Posts </NavLink>
        <NavLink to="Albums"> Albums </NavLink>
        <button>Logout</button>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
