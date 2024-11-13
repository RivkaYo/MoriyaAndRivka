import React from "react";

const TodoItem = ({ item }) => {
  return `${item.id}: ${item.title}.`;
};

export default TodoItem;
