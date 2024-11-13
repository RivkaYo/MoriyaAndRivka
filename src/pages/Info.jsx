import React from "react";
import useFetch from "../functions/useFetch";

const Info = () => {
  const [users] = useFetch("users");

  return (
    <div>
      <h1>Info</h1>
      {users && <p>{users[0].name}</p>}
    </div>
  );
};

export default Info;
