import React from 'react';
import TodoList from "./components/todo/TodoList";
import TodoAdd from "./components/todo/TodoAdd";
import "./App.scss";
import './button.scss';

import Container from '@mui/material/Container';

const App = () => {

  return (
    <Container maxWidth="md">
      <TodoAdd />
      <TodoList />
    </Container>

  )
}

export default App;
