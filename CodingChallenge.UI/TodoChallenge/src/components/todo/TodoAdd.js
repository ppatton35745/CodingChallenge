import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../../todoActions';

const TodoAdd = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');
    // const [newTodoType, setNewTodoType] = useState('Optional');
    return (
        <>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button className={"btn--default"} onClick={() => {
                console.log('newTodo');
                onAddTodo(newTodo)
            }}>Add</button>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);

