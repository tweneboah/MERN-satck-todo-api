const { Todo } = require('../model/Todo');
//Create todo
const createTodo = async (req, res) => {
  console.log(req.body);
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.json(error);
  }
};

//Fetch todos
const fetchTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json(error);
  }
};

//Fetch todo
const fetchTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.json(error);
  }
};

//update todo
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(todo);
  } catch (error) {
    res.json(Error);
  }
};

//Delete todo
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.send('Todo has succeffully deleted');
  } catch (error) {
    res.json(error);
  }
};
module.exports = { createTodo, fetchTodos, fetchTodo, updateTodo, deleteTodo };
