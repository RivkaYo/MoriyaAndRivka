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
  }, [isCompleted]);

  const bodyData = {
    completed: isCompleted,
  };

  // const [dataToComplete] = useFetch(`todos/${item.id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json; charset=UTF-8",
  //   },
  //   body: JSON.stringify(bodyData),
  // });

  // fetch("http://localhost:3000/posts/1", {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     id: 1,
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log("DEMO", json));

  // fetch(`http://localhost:3000/todos/${item.id}`, {
  //   method: "PATCH",
  //   body: JSON.stringify({
  //     completed: isCompleted,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // console.log("dataToComplete: ", dataToComplete);
  return (
    <div>
      <input type="checkbox" onClick={handleCompleted} />
    </div>
  );
};

export default Completed;
