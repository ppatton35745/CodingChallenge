import React, { useState } from 'react';
import { connect } from "react-redux";
import "./App.scss";
import './button.scss';
import { addTodo } from './todoActions';

const TodoAdd = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');
    // const [newTodoType, setNewTodoType] = useState('Optional');

    <>
        <input type="text" value={this.state.newTodo} onChange={(value) => setNewTodo(value)}></input>
        <button className={"btn--default"} onClick={() => onAddTodo(newTodo)}>Add</button>
    </>
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);

