import css from './Todo.module.css';
import HeaderTodo from '../appHeader/HeaderTodo';
import TodoList from './../todoList/TodoList';
import AddTodo from './../addTodo/AddTodo';
import { useEffect, useState } from 'react';
import { getAllTodos } from './../../utils/request';


const Todo = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // IIFE
   (async () => {
     try {
       const data = await getAllTodos();
       if (!data) throw new Error('No data came back from request');
       setTodos(data);
     } catch (err) {
       console.log(err)
     }
   })()
  }, []);

  console.log(todos);
  return (
    <div className={css.todo}>
      <HeaderTodo />
      <TodoList 
        onTodos={todos}
      />
      <AddTodo />
    </div>
  )
}

export default Todo

