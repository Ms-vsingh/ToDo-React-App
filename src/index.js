import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Users from "./Users";
// import List from "./List";
import { HashRouter, Routes, Route } from "react-router-dom"; //to connect your app to the browser's URL

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
