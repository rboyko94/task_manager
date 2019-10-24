import React from 'react';
import './task.scss';

import Input from "../../../components/shared/input/input"

const Task = (props) => {
    const {id, checked, text, important, onChange} = props;

    return (
        <li className="task-list__item mb-2">
            <Input
                customID={`task-${id}`}
                type="checkbox"
                checked={checked}
                label={text}
                onChange={onChange}
            />
        </li>
    )
};

export default Task;