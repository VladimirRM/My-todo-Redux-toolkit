import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const Form = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const todo = {
      id: Math.random(),
      text: value,
    };
    dispatch(addTodo(todo));
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => addTodoHandler()}>Add todo</button>
    </div>
  );
};

export default Form;
