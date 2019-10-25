import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions/actions";
import './task.scss';

import Input from "../../../components/shared/input/input"
import IconButton from "../../../components/shared/iconButton/iconButton"

const Task = ({task, onChange, actions}) => {
    const {id, completed, text, important, edited} = task;

    return (
        <li className={`task-list__item mb-2 d-flex align-items-center justify-content-between ${completed ? "completed" : ""}`}>
            <Input
                id={id}
                customID={`task-${id}`}
                type="checkbox"
                checked={completed}
                label={text}
                edited={edited}
                onChange={onChange}
            />
            <span className="controls">
                <IconButton
                    customClass={`important ${important ? "selected" : ""}`}
                    onClick={() => {
                        actions.setTaskImportant(id);
                    }}
                />
                <IconButton
                    customClass="edit ml-2"
                    onClick={() => {
                        actions.changeEditTaskState(id);
                    }}
                />
                <IconButton
                    customClass="remove ml-2"
                    onClick={() => {
                        actions.removeTask(id);
                    }}
                />
            </span>
        </li>
    )
};

export default connect(
    null,
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Task);