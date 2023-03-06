import React from "react";
import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./index.css";

export default function App() {
  const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1),
    ]);
  };

  return (
    <div id="app">
      <div id="header">
        <h2>Todo List</h2>
      </div>
      <Form addTodo={addTodo} /> <br />
      <List messageList={messageList} deleteTodo={deleteTodo} />
    </div>
  );
}
