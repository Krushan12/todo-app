import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    try {
      const response = await axios.post('http://localhost:5000/tasks', {
        title,
        completed: false
      });
      onTaskAdded(response.data);
      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new task"
        className="task-input"
      />
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTask;