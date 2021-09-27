import axios from 'axios';

const getAllTodoUrl = 'http://localhost:4000/todos';

export const getAllTodos = async () => {
  try {
    const todoResult = await axios.get(getAllTodoUrl);
    return todoResult.data;
  } catch (err) {
    console.log(err);
  }
};
