const Todo = require('../models/Todo');

const getAllTodos = (req, res) => {
  res.send("get all tasks");
};

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
};

const getTodo = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTodo = (req, res) => {
  res.send("update todo");
};

const deleteTodo = (req, res) => {
  res.send("delete todo");
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
};