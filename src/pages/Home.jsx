import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h4>name</h4>
        <NavLink to="/home"> info </NavLink>
        <NavLink to="todos"> Todos </NavLink>
        <NavLink to="posts"> Posts </NavLink>
        <NavLink to="Alboms"> Alboms </NavLink>
        <button>Logout</button>

      </header>
      <Outlet />
    </div>
  );
};

export default Home;
