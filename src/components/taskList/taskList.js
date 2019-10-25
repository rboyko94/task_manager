import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../../actions/actions";
import './taskList.scss';
import Task from "./task/task";

const TaskList = (props) => {
    const {tasks, actions} = props;

    let sortImportant = tasks.filter(task => task.important && !task.completed);
    let sortDefault = tasks.filter(task => !task.important && !task.completed);
    let sortCompleted = tasks.filter(task => task.completed);

    let tasksList = [].concat(sortImportant, sortDefault, sortCompleted).filter(task => task.matchSearch).map(task => (
            <Task
                key={task.id}
                task={task}
                onChange={() => actions.setTaskStatus(task.id)}
            />
        )
    );

    return (
        <ul className="task-list">
            {tasksList}
        </ul>
    )
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
    };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);