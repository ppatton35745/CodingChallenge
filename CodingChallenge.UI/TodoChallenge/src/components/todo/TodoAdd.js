import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../../todoActions';
import todoSvc from "../../TodoService";

const TodoAdd = ({ onAddTodo }) => {
    const dispatch = useDispatch();

    const [newTodoText, setNewTodoText] = useState('');
    const [newTodoDate, setNewTodoDate] = useState('');

    useEffect(() => {
        todoSvc.getPendingTodo().then(todo => {
            if (todo)
                setNewTodoText(todo);
        })
    }, [])

    useEffect(() => {
        todoSvc.updatePendingTodo(newTodoText);
    }, [newTodoText])

    return (
        <>
            <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}></input>
            <input type="date" value={newTodoDate} onChange={(e) => setNewTodoDate(e.target.value)}></input>
            <button className={"btn--default"} onClick={() => {
                console.log("newTodoDate: ", newTodoDate);
                dispatch(addTodo(newTodoText, newTodoDate));
            }}>Add</button>
        </>
    )
}

export default TodoAdd;