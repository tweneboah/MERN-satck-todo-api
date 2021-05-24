const express = require('express');
const {
  createTodoCtrl,
  fetchTodoCtrl,
  fetchTodosCtrl,
  deleteTodoCtrl,
  updateTodoCtrl,
} = require('../controllers/todoCtrl');
createTodoCtrl;
const todoRoutes = express.Router();

//Todos Route
todoRoutes.post('/todos', createTodoCtrl);
todoRoutes.get('/todos', fetchTodosCtrl);
todoRoutes.get('/todos/:id', fetchTodoCtrl);
todoRoutes.delete('/todos/:id', deleteTodoCtrl);
todoRoutes.put('/todos/:id', updateTodoCtrl);
module.exports = { todoRoutes };
