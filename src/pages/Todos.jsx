import React, { useState } from "react";
import useFetch from "../functions/useFetch";
import TodoItem from "../components/TodoItem";
import SearchBar from "../components/SearchBar";
import AddTodo from "../components/AddTodo";
import filterArrBySearch from "../functions/filterArrBySearch";

const Todos = ({ currentUser }) => {
  const [searchText, setSearchText] = useState("");
  console.log("hi");
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
      {console.log("myTodosArr: ", myTodosArr)}
      <AddTodo />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <ol>
        {filterArrBySearch(searchText, myTodosArr).map((todoItem) => (
          <li key={todoItem.id}>
            <TodoItem item={todoItem} />
            <br></br>
            <br></br>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
