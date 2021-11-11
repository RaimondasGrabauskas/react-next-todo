import css from './Todo.module.css';
import HeaderTodo from '../appHeader/HeaderTodo';
import TodoList from './../todoList/TodoList';
import AddTodo from './../addTodo/AddTodo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/todoRedux';


const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

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

