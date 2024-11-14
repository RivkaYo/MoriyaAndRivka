import React from "react";
import Completed from "./Completed";

const TodoItem = ({ item }) => {
  return (
    <div className="todoItem">
      ID: {item.id} <br /> {item.title} <Completed item={item} />
    </div>
  );
};

export default TodoItem;
