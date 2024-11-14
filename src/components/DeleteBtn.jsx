import React from "react";

const DeleteBtn = (item) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${item.item.id}`;
  function deleteItem() {
    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(null),
    });
  }
  return (
    <div>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
