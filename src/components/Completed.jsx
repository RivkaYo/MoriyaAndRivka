import React from "react";
import useFetch from "../functions/useFetch";

const Completed = ({ item }) => {
  function handleCompleted() {
    useFetch(`todos/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    });
    console.log("Mazal tov!");
  }
  return (
    <div>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
};

export default Completed;
