import React, { useState } from "react";

const AddTodo = ({ currentUser, todosLength, setAddTodo, addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  function handleClick() {
    const newTodoObj = {
      userId: currentUser.id,
      id: Number(todosLength) + 1,
      title: newTodo,
      Completed: false,
    };
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoObj),
    });
    setAddTodo(!addTodo);
  }
  return (
    <div>
      <label htmlFor="newTodo">enter new to do:</label>
      <input
        type=""
        id="newTodo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTodo;
