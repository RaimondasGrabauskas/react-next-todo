import css from './TodoList.module.css';
import TodoElement from './../todoElement/TodoElement';

const TodoList = () => {
  return (
    <ul className={css['todo-list']}>
        <TodoElement />
    </ul>
  )
}

export default TodoList
