import React, { useState } from 'react';
import { TodoModel } from "../../TodoModel";
import PropTypes from "prop-types";
import './todo.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Todo = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingText, setEditingText] = useState(props.todo.text);


    const toggleComplete = () => {
        props.onCompleteChange({ ...props.todo, isComplete: !props.todo.isComplete });
    }

    const toggleEditText = () => {
        setIsEditing(!isEditing);
    }

    const saveText = () => {
        if (!isEditing) return;
        props.onTextChange(editingText, props.todo.id);
        toggleEditText();
    };

    const onChangeEditText = (event) => {
        setEditingText(event.target.value);
    }

    const getClassName = () => {
        const { isComplete } = props.todo;
        return `todo-item ${isComplete ? 'complete' : 'incomplete'}`;
    }

    const TodoEditMode = () => {
        return (
            <>
                <input onChange={onChangeEditText} value={editingText}></input>
                <IconButton onClick={saveText} className={"btn--default btn--base"}><CheckCircleOutlineIcon /></IconButton>
                <IconButton onClick={toggleEditText} className={"btn--default btn--destructive"}><CancelOutlinedIcon /></IconButton>
            </>
        )
    }

    const TodoReadOnlyMode = () => {
        return (
            <>
                {props.todo.text}
                <IconButton onClick={toggleComplete} className={"btn--default btn--destructive"}><DeleteIcon /></IconButton>
                <IconButton onClick={toggleEditText} className={"btn--default btn--base"}><ModeEditIcon /></IconButton>
            </>
        )
    }

    return (
        <div className={getClassName()}>
            {isEditing ? <TodoEditMode /> : <TodoReadOnlyMode />}
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape(TodoModel),
    onTextChange: PropTypes.func,
    onCompleteChange: PropTypes.func
};

export default Todo;