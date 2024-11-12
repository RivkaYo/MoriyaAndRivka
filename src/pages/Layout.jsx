import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>welcome to our website!!!!!</h2>
      
      <Outlet />
    </div>
  );
};

export default Layout;
