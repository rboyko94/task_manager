export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: task,
    };
};

export const removeTask = (id) => {
    return {
        type: "REMOVE_TASK",
        payload: id,
    };
};

export const editTask = (value) => {
    return {
        type: "EDIT_TASK",
        payload: value,
    };
};

export const searchTask = (value) => {
    return {
        type: "SEARCH_TASK",
        payload: value,
    };
};

export const changeEditTaskState = (id) => {
    return {
        type: "CHANGE_EDIT_TASK_STATE",
        payload: id,
    };
};

export const setTaskStatus = (id) => {
    return {
        type: "SET_TASK_STATUS",
        payload: id,
    };
};

export const setTaskImportant = (id) => {
    return {
        type: "SET_TASK_IMPORTANT",
        payload: id,
    };
};

export const setTasksStatus = (state) => {
    return {
        type: "SET_TASKS_STATUS",
        payload: state,
    };
};