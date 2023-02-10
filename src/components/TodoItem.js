import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todo.text}
      <button onClick={() => removeTodoHandler(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
