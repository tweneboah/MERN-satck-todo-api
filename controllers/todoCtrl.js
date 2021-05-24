const expressAsyncHandler = require('express-async-handler');

const Todo = require('../model/Todo');

//CREATE
const createTodoCtrl = expressAsyncHandler(async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(200);
  res.json(todo);
});

// //FETCH all Todos
const fetchTodosCtrl = expressAsyncHandler(async (req, res) => {
  let { startDate, endDate } = req.query;
  const defaultStartDate = '2020-1-1';
  const defaultEndDate = new Date();

  const todos = await Todo.find({
    createdAt: {
      $gte: new Date(
        new Date(startDate === undefined ? defaultStartDate : startDate)
      ),
      $lte: new Date(
        new Date(endDate === undefined ? defaultEndDate : endDate)
      ),
    },
  }).sort({ createdAt: -1 });

  res.json(todos);
});

//Fetch details
const fetchTodoCtrl = expressAsyncHandler(async (req, res) => {
  if (!req.params.id) throw new Error('Todo id is not found');
  const todo = await Todo.findById(req.params.id).sort({ createdAt: -1 });
  res.status(200);
  res.json(todo);
});

//Update
const updateTodoCtrl = expressAsyncHandler(async (req, res) => {
  if (!req.params.id) throw new Error('Todo id is not found');
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      title: req?.body?.title,
      description: req?.body?.description,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200);
  res.json(todo);
});

// //Delete
const deleteTodoCtrl = expressAsyncHandler(async (req, res) => {
  if (!req.params.id) throw new Error('Todo id is not found');
  const todo = await Todo.findByIdAndDelete(req.params.id);
  res.status(200);
  res.json(todo);
});

module.exports = {
  createTodoCtrl,
  fetchTodoCtrl,
  fetchTodosCtrl,
  updateTodoCtrl,
  deleteTodoCtrl,
};
