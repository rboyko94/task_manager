import React, {useRef} from 'react';
import './App.scss';
import Title from '../components/shared/title/title'
import Input from '../components/shared/input/input'
import TaskList from '../components/taskList/taskList'

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/actions"

const App = (props) => {
    const {actions} = props;
    const taskInput = useRef(null);

    return (
        <div className="App container">
            <div className="row">
                <div className="col-sm-8 mb-2 mb-sm-5">
                    <Title
                        text="Планировщик задач"
                    />
                </div>
                <div className="col-sm-4 mb-2 mb-sm-5">
                    <Input
                        customID="search"
                        type="search"
                        placeholder="Поиск"
                        onKeyUp={e => {
                            return actions.searchTask(e.target.value);
                        }}
                    />
                </div>
                <div className="col-sm-8 mb-2">
                    <Input
                        placeholder="Описание моей новой задачи"
                        maxlength="50"
                        inputref={taskInput}
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                if (!e.target.value) {
                                    return;
                                }

                                actions.addTask({
                                    id: Math.random(),
                                    completed: false,
                                    text: e.target.value,
                                    matchSearch: true,
                                    edited: false,
                                    important: false,
                                });

                                e.target.value = "";
                            }
                        }}
                    />
                </div>
                <div className="col-sm-4 mb-2">
                    <Input
                        type="submit"
                        value="Добавить задачу"
                        onClick={() => {
                            if (!taskInput.current.value) {
                                return;
                            }

                            actions.addTask({
                                id: Math.random(),
                                completed: false,
                                text: taskInput.current.value,
                                matchSearch: true,
                                edited: false,
                                important: false,
                            });

                            taskInput.current.value = "";
                        }}
                    />
                </div>
                <div className="col-12">
                    <TaskList/>
                </div>
                <div className="col mt-2 mt-sm-5">
                    <Input
                        customID="checkbox"
                        type="checkbox"
                        label="Все задачи выполнены"
                        onChange={e => {
                            actions.setTasksStatus(e.target.checked);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    null,
    mapDispatchToProps
)(App);
