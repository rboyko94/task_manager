import React from 'react';
import './taskList.scss';
import Task from "./task/task";

const TaskList = (props) => {
    const {} = props;

    const handler = () => {
        console.log(1);
    };

    const db = [
            {
                id: 1,
                checked: true,
                text: 'lorem ipsum',
                important: false,
            },
            {
                id: 2,
                checked: false,
                text: 'lorem ipsum',
                important: false,
            },
            {
                id: 3,
                checked: false,
                text: 'lorem ipsum',
                important: false,
            },
        ]
    ;

    let tasks = db.map((task) => {
        return (
            <Task
                key={task.id}
                id={task.id}
                checked={task.checked}
                text={task.text}
                important={task.important}
                onChange={handler}
            />
        )
    });

    return (
        <ul className="task-list">
            {tasks}
        </ul>
    )
};

export default TaskList;