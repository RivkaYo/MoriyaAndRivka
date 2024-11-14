import React from "react";
import Completed from "./Completed";
import DeleteBtn from "./DeleteBtn";

const TodoItem = ({ item }) => {
  return (
    <div>
      ID: {item.id}: {item.title}
      <Completed item={item} />
      <DeleteBtn item={item} />
    </div>
  );
};

export default TodoItem;
