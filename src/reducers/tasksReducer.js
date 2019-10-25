const initialState = [
    {
        id: Math.random(),
        completed: false,
        text: 'Зарегестрировать баьушку в Твиче',
        matchSearch: true,
        edited: false,
        important: false,
    },
    {
        id: Math.random(),
        completed: false,
        text: 'Взять автограф и Джареда Лето',
        matchSearch: true,
        edited: false,
        important: false,
    },
    {
        id: Math.random(),
        completed: false,
        text: 'Записать собаку на груминг',
        matchSearch: true,
        edited: false,
        important: false,
    },
    {
        id: Math.random(),
        completed: false,
        text: 'Научится играть на барабанах',
        matchSearch: true,
        edited: false,
        important: false,
    },
];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state.slice(), action.payload];

        case "REMOVE_TASK":
            return state.filter(task => {
                if (task.id !== action.payload) {
                    return task;
                }
            });

        case "SET_TASK_STATUS":
            return state.map(task => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }
                return task;
            });

        case "SET_TASKS_STATUS":
            return state.map(task => {
                task.completed = action.payload;
                return task;
            });

        case "SET_TASK_IMPORTANT":
            return state.map(task => {
                if (task.id === action.payload) {
                    task.important = !task.important;
                }
                return task;
            });

        case "CHANGE_EDIT_TASK_STATE":
            return state.map(task => {
                if (task.id === action.payload) {
                    task.edited = !task.edited;
                }
                return task;
            });

        case "SEARCH_TASK":
            return state.map(task => {
                if (task.text.indexOf(action.payload) === -1) {
                    task.matchSearch = false;
                } else {
                    task.matchSearch = true;
                }
                return task;
            });

        case "EDIT_TASK":
            return state.map(task => {
                if (task.id === action.payload.id) {
                    task.text = action.payload.text;
                }
                return task;
            });

        default:
            return state;
    }
};

export default tasksReducer;