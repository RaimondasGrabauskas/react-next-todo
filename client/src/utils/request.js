import axios from 'axios';

// url
const url = 'http://localhost:4000/todo/';
const createTodoUrl = url + 'new';
const deleteTodoUrl = url + 'delete';
const updateTodoUrl = url + 'update';
const updateIsDoneUrl = url + 'isDone';
const updateIsFavoriteUrl = url + 'isFavorite';

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

// done todo
export const isDoneTodo = async (todoId, detailsToUpdate) => {
  try {
    const updateResult = await axios.put(updateIsDoneUrl + '/' + todoId, detailsToUpdate);
    return updateResult.data;
  } catch (error) {
    console.log(error.message);
  }
};

// is favorite todo

export const isFavoriteTodo = async (todoId, detailsToUpdate) => {
  try {
    const updateResult = await axios.put(updateIsFavoriteUrl + '/' + todoId, detailsToUpdate);
    return updateResult.data;
  } catch (error) {
    console.log(error.message);
  }
};
