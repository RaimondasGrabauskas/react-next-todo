import css from './AddTodo.module.css';

const AddTodo = () => {
  return (
    <div className={css['add-todo-container']}>
        <i  className="fa fa-plus-circle add-icon"></i>
        <input
          type="text"
          placeholder="Add new Todo"
        />
      </div>
  )
}

export default AddTodo
