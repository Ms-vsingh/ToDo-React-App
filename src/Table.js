import React from "react";
import "./Table.css";

export default function UserList(props) {
  return (
    <div>
      <table style={{ width: "100%", border: "1px solid black" }}>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Actions</th>
        </tr>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <img
                src={user.avatar}
                alt={`${user.email}`}
                width={100}
                height={100}
              />
            </td>
            <td>
              <button
                className="button"
                onClick={() => props.deleteHandler(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
