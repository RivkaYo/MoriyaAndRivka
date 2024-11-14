import React, { useEffect } from "react";
import useFetch from "../functions/useFetch";
import { useState } from "react";

const Completed = ({ item }) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  function handleCompleted() {
    setIsCompleted((prev) => !prev);
  }

  useEffect(() => {
    console.log(isCompleted);
    console.log("item: ", item);
    console.log("item.id: ", item.id);
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
