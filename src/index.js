import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Users from "./Users";
// import List from "./List";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //to connect your app to the browser's URL

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
