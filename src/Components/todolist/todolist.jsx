import React, { useState } from 'react';
import './todolist.css';

const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todolist-container">
            <h1>ToDo List</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    value={taskInput} 
                    onChange={handleInputChange} 
                    placeholder="Add a new task" 
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;
