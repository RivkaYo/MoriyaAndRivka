import React from "react";

const Completed = ({ item }) => {
  function handleCompleted() {
    alert("Mazal tov!");
  }
  return (
    <div>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
};

export default Completed;
