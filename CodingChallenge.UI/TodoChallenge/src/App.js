import React, {Component} from 'react';
import TodoList from "./components/todo/TodoList";
import {connect} from "react-redux";
import "./App.scss";
import './button.scss';
import { addTodo } from './todoActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    };
  }

  textInputChange = (e) =>  {
    this.setState({...this.state, newTodo: e.target.value});
  }

  addNewTodo = () => {
    console.warn('not implemented');
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.newTodo} onChange={this.textInputChange}></input>
        <button className={"btn--default"} onClick={this.addNewTodo}>Add</button>
        <TodoList />
      </div>
  )}
}

const mapStateToProps = (state) => ({
  todos: state.todos ?? []
});
const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (text) => dispatch(addTodo(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);