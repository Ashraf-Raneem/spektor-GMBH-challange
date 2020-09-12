import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todoList/todolist.component";
import GoogleMap from "./components/googleMap/googleMap.component";

function App() {
  return (
    <div className="App">
      <TodoList />
      <GoogleMap />
    </div>
  );
}

export default App;
