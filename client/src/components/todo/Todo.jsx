import css from './Todo.module.css';
import HeaderTodo from '../appHeader/HeaderTodo';
import TodoList from './../todoList/TodoList';
import AddTodo from './../addTodo/AddTodo';
import { useEffect, useState } from 'react';
import { createTodo, getAllTodos } from './../../utils/request';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/todoRedux';


const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);


  useEffect(() => {
    // IIFE
    dispatch(getTodos());
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

