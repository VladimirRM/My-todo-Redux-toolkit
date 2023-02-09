import React, { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

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
      <button onClick={() => addTodoHandler()}>Add</button>
    </div>
  );
};

export default Form;
