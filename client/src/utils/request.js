import axios from 'axios';

// url

const createTodoUrl = 'http://localhost:4000/todo/new';
const deleteTodoUrl = 'http://localhost:4000/todo/delete';
const updateTodoUrl = 'http://localhost:4000/todo/update';

// post todo

export const createTodo = async (detailsToCreateTodo) => {
  try {
    const createReasult = await axios.post(createTodoUrl, detailsToCreateTodo);
    return createReasult.data;
  } catch (err) {
    console.log(err);
  }
};

// delete todo

export const deleteTodo = async (todoId) => {
  try {
    const deleteResult = await axios.delete(deleteTodoUrl + '/' + todoId);
    return deleteResult.data;
  } catch (error) {
    console.log(error.message);
  }
};

// update todo

export const updateTodo = async (todoId, detailsToUpdate) => {
  try {
    const updateResult = await axios.put(updateTodoUrl + '/' + todoId, detailsToUpdate);
    return updateResult.data;
  } catch (error) {
    console.log(error.message);
  }
};
