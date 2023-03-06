import React from "react";
import { useState } from "react";

export default function Form(props) {
  const addTodo = props.addTodo;
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div id="form">
      <input
        id="form_input"
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <button id="form_submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
}
