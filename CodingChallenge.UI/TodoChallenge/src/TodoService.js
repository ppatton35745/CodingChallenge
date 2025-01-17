const TODOS_KEY = "todo-data"
const svc = {

    getTodos: () => {
        const data = localStorage.getItem(TODOS_KEY);
        if (!data) { return Promise.resolve([]); }
        const parsed = JSON.parse(data);
        return Promise.resolve(parsed);
    },

    updateTodo: async (todo) => {
        const todos = (await svc.getTodos()).map((item) => (item.id === todo.id ? todo : item));
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        return Promise.resolve(todo);
    },

    addTodo: async (text, dueDate) => {
        const todos = (await svc.getTodos());
        const nextId = Number(new Date());
        const todo = { id: nextId, text, isComplete: false, dueDate: dueDate };
        localStorage.setItem(TODOS_KEY, JSON.stringify([...todos, todo]));
        return Promise.resolve(todo);
    },

    initialize: () => {
        if (!!localStorage.getItem(TODOS_KEY)) return;
        const firstId = Number(new Date());
        let counter = 0;
        const todos = [
            { id: firstId, text: 'Run the todo app', isComplete: true, dueDate: "2023-11-15" },
            { id: ++counter + firstId, text: 'Implement addNewTodo in App.js', isComplete: false, dueDate: "2023-11-15" },
            { id: ++counter + firstId, text: 'Fix the bug where text changes to a todo item are lost on browser refresh', isComplete: false, dueDate: "2023-11-10" },
            { id: ++counter + firstId, text: 'Match the provided design', isComplete: false, dueDate: "2023-11-17" },
            { id: ++counter + firstId, text: 'Add a chart for complete and incomplete todo items', isComplete: false, dueDate: "2023-11-15" },
            { id: ++counter + firstId, text: 'Replace the Edit/Save/Complete buttons with icons', isComplete: false, dueDate: "2023-11-13" },
            { id: ++counter + firstId, text: 'Add a due date to each todo', isComplete: false, dueDate: "2023-11-15" },
            { id: ++counter + firstId, text: 'Sort the todo list by due date', isComplete: false, dueDate: "2023-11-15" },
            { id: ++counter + firstId, text: 'Make all of the tests pass', isComplete: false, dueDate: "2023-11-15" },
            { id: ++counter + firstId, text: 'Refactor anything in this app to your liking', isComplete: false, dueDate: "2023-11-15" },
        ];
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    }
}

export default svc;
