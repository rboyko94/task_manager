import React from 'react';
import './App.scss';

import Title from '../components/shared/title/title'
import Input from '../components/shared/input/input'
import TaskList from '../components/taskList/taskList'

const App = () => {
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
                    />
                </div>
                <div className="col-sm-8 mb-2">
                    <Input
                        placeholder="Описание моей новой задачи"
                    />
                </div>
                <div className="col-sm-4 mb-2">
                    <Input
                        type="submit"
                        value="Добавить задачу"
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
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
