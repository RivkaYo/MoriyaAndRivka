import React from "react";
import Completed from "./Completed";

const TodoItem = ({ item }) => {
  return (
    <div>
      ID: {item.id} <br></br>
      Title: {item.title}
      <Completed item={item} />
    </div>
  );
};

export default TodoItem;
