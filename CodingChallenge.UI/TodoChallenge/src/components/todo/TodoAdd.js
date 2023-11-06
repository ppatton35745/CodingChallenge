import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../../todoActions';
import todoSvc from "../../TodoService";

const TodoAdd = ({ onAddTodo }) => {
    const dispatch = useDispatch();

    const [newTodoText, setNewTodoText] = useState('');

    useEffect(() => {
        todoSvc.getPendingTodo().then(todo => {
            if (todo)
                setNewTodoText(todo);
        })
    }, [])

    useEffect(() => {
        todoSvc.updatePendingTodo(newTodoText);
    }, [newTodoText])

    const handleThisPlease = (value) => {
        console.log("handler: ", value);
    }

    return (
        <>
            <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}></input>
            <input type="date" onChange={(e) => handleThisPlease(e.target.value)}></input>
            <button className={"btn--default"} onClick={() => {
                dispatch(addTodo(newTodoText));
            }}>Add</button>
        </>
    )
}

export default TodoAdd;