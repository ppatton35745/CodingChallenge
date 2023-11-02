import todoSvc from "./TodoService";

export const TODO_TEXT_CHANGE = "TODO_ACTION/TODO_TEXT_CHANGE";
export const TODO_COMPLETE_CHANGE = "TODO_ACTION/TODO_COMPLETE_CHANGE";
export const GET_TODOS_SUCCESS = "TODO_ACTION/GET_TODOS_SUCCESS";
export const ADD_TODO_SUCCESS = "TODO_ACTION/ADD_TODO_SUCCESS";

export const completeTodo = (todo) => {
    return (dispatch) => (
        todoSvc.updateTodo(todo)
            .then(() => {
                return dispatch({type: TODO_COMPLETE_CHANGE, isComplete: todo.isComplete, id: todo.id })
            })
    );
};

export const getTodos = () => {
    return (dispatch) => (
        todoSvc.getTodos()
            .then(todos => {
                return dispatch({type: GET_TODOS_SUCCESS, todos })
            })
    );
}

export const addTodo = (todo) => {
    return (dispatch) => {
        todoSvc.addTodo(todo)
        .then(() => {
            return dispatch({type: ADD_TODO_SUCCESS, todo })
        })
    }
}