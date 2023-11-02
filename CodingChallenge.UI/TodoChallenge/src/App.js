import React from 'react';
import TodoList from "./components/todo/TodoList";
import TodoAdd from "./components/todo/TodoAdd";
import "./App.scss";
import './button.scss';

const App = () => {

  return (
    <div className="App">
      <TodoAdd />
      <TodoList />
    </div>
  )
}

export default App;
