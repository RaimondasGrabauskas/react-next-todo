const express = require('express');
const TodoData = require('../modules/todoModule');
const router = express.Router();

// get all todos route

router.get('/todos', async (req, res) => {
  try {
    const todoResult = await TodoData.find();
    res.json(todoResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new todo route

router.post('/todo/new', async (req, res) => {
  const newTodoDeteil = req.body;
  const newTodo = new TodoData(newTodoDeteil);
  try {
    const creatingNewTodoResult = await newTodo.save();
    res.json(creatingNewTodoResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete todo
router.delete('/todo/delete/:id', async (req, res) => {
  const todoDeleteId = req.params.id;
  try {
    const deleteResult = await TodoData.findByIdAndDelete(todoDeleteId);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update todo

router.put('/todo/update/:id', async (req, res) => {
  const updateTodoId = req.params.id;
  const detailsToUpdate = req.body;

  try {
    const updateResult = await TodoData.findByIdAndUpdate(updateTodoId, detailsToUpdate);
    res.json(updateResult);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
