import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = ({ currentUser }) => {
  const navigate = useNavigate();
  const isEmpty = (obj) => Object.keys(obj).length === 0;
  useEffect(() => {
    isEmpty(currentUser) ? navigate("/login") : navigate("/home");
  }, []);
  return (
    <div>
      <h2 className="layoutHeader">welcome to our website!!!!!</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
