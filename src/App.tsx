import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routers from "./routers";

function App() {
  const Routers = useRoutes(routers);
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome to React Router! App</h1>
      {Routers}
    </div>
  );
}

export default App;
