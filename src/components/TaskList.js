import React, { useState } from 'react';
import './TaskList.css';
import { FaCheck, FaUndoAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [filterCompleted, setFilterCompleted] = useState(false);

    const addTask = () => {
        if (taskName.trim() !== '') {
            setTasks([...tasks, { name: taskName, completed: false }]);
            setTaskName('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const filteredTasks = filterCompleted 
        ? tasks.filter(task => task.completed) 
        : tasks;

    return (
        <div className="task-manager">
            <nav className="navbar">
                <h1>Task List</h1>
            </nav>
            <main className="main-content">
                <div className="controls">
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter task name"
                        className="task-input"
                    />
                    <button className="add-task-btn" onClick={addTask}>
                        <span className="icon">+</span>
                    </button>
                    <button className="filter-btn" onClick={() => setFilterCompleted(!filterCompleted)}>
                        {filterCompleted ? <FaEyeSlash /> : <FaEye />} 
                    </button>
                </div>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map((task, index) => (
                            <tr key={index}>
                                <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {task.name}
                                </td>
                                <td>{task.completed ? 'Completed' : 'Incomplete'}</td>
                                <td>
                                    <button className="action-btn" onClick={() => toggleTaskCompletion(index)}>
                                        {task.completed ? <FaUndoAlt /> : <FaCheck />}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default TaskList;
