const express = require('express');
const router = express.Router();

// In-memory task store with dummy data
let tasks = [
  {
    id: 1,
    title: 'Buy groceries',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: 'Finish assignment',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: 'Call a friend',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
let nextId = 4;

// GET /tasks - Fetch all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /tasks - Add new task
router.post('/', (req, res) => {
  const { title, completed = false } = req.body;

  // Validation
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: !!completed,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  tasks.unshift(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Update task status
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  task.completed = !!completed;
  task.updatedAt = new Date();
  res.json(task);
});

// DELETE /tasks/:id - Delete task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;