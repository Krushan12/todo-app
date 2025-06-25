import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      // Support both _id (old Mongo) and id (in-memory)
      const normalized = response.data.map(task => ({
        ...task,
        id: task.id || task._id
      }));
      setTasks(normalized);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, {
        completed: !completed
      });
      fetchTasks(); // Re-fetch to get updated data
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks(); // Re-fetch to get updated list
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    }
  };

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div 
          key={task.id} 
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <span className="task-title">{task.title}</span>
          <div className="task-actions">
            <button 
              onClick={() => handleToggle(task.id, task.completed)}
              className="toggle-btn"
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button 
              onClick={() => handleDelete(task.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;