import css from './TodoElement.module.css';

const TodoElement = () => {
  return (
    <li className={css['app-todo-el']}>
      <i className="fa fa-pencil"></i>
      <i className="fa fa-trash"></i>
    </li>
  )
}

export default TodoElement
