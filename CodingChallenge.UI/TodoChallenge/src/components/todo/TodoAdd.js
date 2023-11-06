import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../../todoActions';
import todoSvc from "../../TodoService";
import Box from '@mui/material/Box';

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
        <Box sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ flexDirection: 'row', pl: 0, justifyContent: 'center', alignItems: 'center' }}>
                <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}></input>
                <button className={"btn--default"} onClick={() => {
                    console.log("newTodoDate: ", newTodoDate);
                    dispatch(addTodo(newTodoText, newTodoDate));
                }}>
                    Add
                </button>
            </Box>
            <input type="date" value={newTodoDate} onChange={(e) => setNewTodoDate(e.target.value)}></input>

        </Box >
    )
}

export default TodoAdd;