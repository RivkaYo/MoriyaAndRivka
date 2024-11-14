import React, { useState } from "react";
import useFetch from "../functions/useFetch";
import TodoItem from "../components/TodoItem";
import SearchBar from "../components/SearchBar";
import AddTodo from "../components/AddTodo";
import filterArrBySearch from "../functions/filterArrBySearch";

const Todos = ({ currentUser }) => {
  const [searchText, setSearchText] = useState("");
  const [todos] = useFetch("todos");
  const [addTodo, setAddTodo] = useState(false);

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
      <h2>Todos</h2>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <br />
      <button onClick={() => setAddTodo(!addTodo)}>Add To Do</button>
      {addTodo && (
        <AddTodo
          currentUser={currentUser}
          todosLength={todos.length}
          setAddTodo={setAddTodo}
          addTodo={addTodo}
          myTodosArr={myTodosArr}
        />
      )}
      <ol>
        {filterArrBySearch(searchText, myTodosArr).map((todoItem) => (
          <li key={todoItem.id}>
            <TodoItem item={todoItem} />
            <br />
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
