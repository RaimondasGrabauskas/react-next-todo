const express = require('express');
const TodoData = require('../modules/todoModule');
const router = express.Router();

// create new todo route

router.post('/todo/new', async (req, res) => {
  // const newTodoDetails = req.body;
  const newTodo = new TodoData(req.body);

  try {
    const creatingNewTodoResult = await newTodo.save();
    res.json(creatingNewTodoResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all todos route

router.get('/todos', async (req, res) => {
  try {
    const todoResult = await TodoData.find();
    res.json(todoResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
