import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <Form />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default App;
