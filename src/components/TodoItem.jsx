import React from "react";
import Completed from "./Completed";
import DeleteBtn from "./DeleteBtn";

const TodoItem = ({ item }) => {
  console.log("item: ", item);
  console.log("item.completed: ", item.completed);
  return (
    <div>
      ID: {item.id}: {item.title}
      {item.completed}
      <Completed item={item} />
      <DeleteBtn item={item} />
    </div>
  );
};

export default TodoItem;
