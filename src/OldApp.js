import List from "./List";
import React, { useState } from "react";
//React Component is a JS function or class which returns JSX.
const App = () => {
  const arr = ["Varsha", "Shivangi"];
  const fruits = ["Banana", "Grapes", "Mango"];
  const numbers = [10, 11, 12];
  const [name, setName] = useState("John");
  const handleClick = () => {
    setName("James");
    console.log(name);
  };
  return (
    <div className="App">
      <h1> React-App </h1>
      <List list={arr} title="Names" />
      <List list={fruits} title="Fruits" />
      <List list={numbers} title="Numbers" />
      {name}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default App;
