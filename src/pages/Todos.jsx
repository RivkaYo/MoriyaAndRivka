import React from "react";
import useFetch from "../functions/useFetch";
import TodoItem from "../components/TodoItem";
import SearchBar from "../components/SearchBar";
import AddTodo from "../components/AddTodo";

const Todos = ({ currentUser }) => {
  const [todos] = useFetch("todos");
  const myTodosArr = [];

  function checkIfMine(todo) {
    if (todo.userId == currentUser.id) {
      myTodosArr.push(todo);
    }
  }

  if (!todos) return <p>Loading...</p>;
  todos.map(checkIfMine);

  return (
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <SearchBar />
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
