import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList"
  
var destination = document.querySelector("#container");
// https://www.kirupa.com/react/simple_todo_app_react.html
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);