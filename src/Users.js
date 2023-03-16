import { useState, useEffect } from "react";
import UserList from "./Table";
import * as React from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const deleteHandler = (id) => {
    console.log(users.filter((user) => user.id !== id));
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((data) => data.json())
      .then((users) => setUsers(users.data));
  }, []);

  useEffect(() => {
    setCount(users.length);
  }, [users]);

  return (
    <div>
      <main>
        <h1>Users List</h1>
        <p style={{ paddingLeft: 10 }}>Current user count: {count}</p>
        <UserList users={users} deleteHandler={deleteHandler} />
      </main>
    </div>
  );
}
