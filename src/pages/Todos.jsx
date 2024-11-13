import React from "react";
import useFetch from "../functions/useFetch";
import TodoItem from "../components/TodoItem";

const Todos = ({ currentUser }) => {
  console.log("currentUserId: ", currentUser.id);
  const [todos] = useFetch("todos");

  const myTodosArr = [];

  function checkIfMine(todo) {
    console.log("todo: ", todo);
    console.log("todo.userId: ", todo.userId);
    console.log("currentUser.id: ", currentUser.id);
    if (todo.userId == currentUser.id) {
      myTodosArr.push(todo);
    }
  }

  if (!todos) return <p>Loading...</p>;

  todos.map(checkIfMine);

  console.log("myTodosArr: ", myTodosArr);

  return (
    <div>
      <h1>Todos</h1>
      {/* <p>{JSON.stringify(myTodosArr)}</p> */}
      <ol>
        {myTodosArr.map((todoItem) => (
          <li key={todoItem.id}>
            new todo item:
            <TodoItem item={todoItem} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
