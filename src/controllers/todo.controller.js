const { Todo } = require("../models");

// Create a new task
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await Todo.create({ title, description });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
};

// Get all tasks
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

// Update a task
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ error: "Task not found" });

    //only update the fields that were actually
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
};

// Delete a task
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ error: "Task not found" });

    await todo.destroy();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
};
