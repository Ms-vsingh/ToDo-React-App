// function List(props) {
//   const list = props.list;
//   const title = props.title;
//   return (
//     <div>
//       <h1>{title}</h1>
//       <ul>
//         {list.map(function func(item) {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// export default List;
import React from "react";

export default function List(props) {
  const messageList = props.messageList;
  const deleteTodo = props.deleteTodo;
  const handleSubmit = (message) => {
    deleteTodo(message);
  };
  return (
    <ol id="todolist">
      {messageList.map((message) => (
        <li id="todo" key={message}>
          <span id="todo_label">{message + "  "}</span>
          <button id="todo_delete" onClick={() => handleSubmit(message)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
