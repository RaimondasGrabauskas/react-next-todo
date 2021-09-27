import css from './TodoList.module.css';
import TodoElement from './../todoElement/TodoElement';

const TodoList = ({onTodos}) => {
  return (
    <ul className={css['todo-list']}>
      {onTodos.map((todo) => (
        <TodoElement 
          key={todo._id}
          todo={todo}
        />
      )
    )}
    </ul>
  )
}

export default TodoList
