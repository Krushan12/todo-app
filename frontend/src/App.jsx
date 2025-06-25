import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasksUpdated, setTasksUpdated] = useState(false);

  const handleTaskAdded = () => {
    setTasksUpdated(!tasksUpdated);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList key={tasksUpdated} />
    </div>
  );
}

export default App;