import React from "react";
import Completed from "./Completed";

const TodoItem = ({ item }) => {
  return (
    <div>
      {item.id} {item.title}
      <Completed item={item} />
    </div>
  );
};

export default TodoItem;
