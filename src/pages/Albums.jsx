import React from "react";
import { Outlet } from "react-router-dom";

const Albums = () => {
  return (
    <div>
      <h1>Albums</h1>
      <Outlet />
    </div>
  );
};

export default Albums;