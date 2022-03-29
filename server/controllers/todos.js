const Todo = require('../models/Todo');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos: todos }); //{ todos } === { todos: todos } - ES6 Syntax
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

};

const getTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });
    if (!todo) {
      return res.status(404).json({ msg: `No todo with id: ${todoId}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoId });
    if (!todo) {
      return res.status(404).json({ msg: `No todo with id: ${todoId}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ msg: `No todo with id: ${todoId}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
};