import css from './TodoElement.module.css';

const TodoElement = ({todo}) => {
  
  return (
    <li className={css['app-todo-el']}>
      {todo.title}
      <i className="fa fa-pencil"></i>
      <i className="fa fa-trash"></i>
    </li>
  )
}

export default TodoElement
