import css from './Todo.module.css';
import HeaderTodo from '../appHeader/HeaderTodo';
import TodoList from './../todoList/TodoList';
import AddTodo from './../addTodo/AddTodo';

const Todo = () => {
  return (
    <div className={css.todo}>
      <HeaderTodo />
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default Todo

