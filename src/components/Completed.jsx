import React, { useEffect } from "react";
import { useState } from "react";

const Completed = ({ item }) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  function handleCompleted() {
    setIsCompleted((prev) => !prev);
  }

  useEffect(() => {
    console.log(isCompleted);
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/${item.id}`;
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: item.userId,
        id: item.id,
        title: item.title,
        completed: !item.completed,
      }),
    });
  }, [isCompleted]);

  return (
    <div>
      <input type="checkbox" onClick={handleCompleted} />
    </div>
  );
};

export default Completed;
