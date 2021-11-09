import { useDispatch } from 'react-redux';
import css from './TodoElement.module.css';
import { getTodos } from './../../store/todoRedux';
import { deleteTodo, isDoneTodo, updateTodo } from '../../utils/request';
import { useState, useEffect } from 'react';

const TodoElement = ({todo}) => {
  const dispatch = useDispatch();
  const [isEditOn, setIsEditOn] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  


  const handleIsEditOn = () => {
    setIsEditOn(!isEditOn);
  }

  const handleChangeInputValue = (e) => {
    setNewTitle(e.target.value);
  }

  const deleteTodoItem = async (id) => {
    const deletedSuccess = await deleteTodo(id);
    if (deletedSuccess) {
      dispatch(getTodos());
    }
  }

  const editTodo = async (id) => {
    const editDetails = {
      title: newTitle,
    };
    const updateSuccess = await updateTodo(id, editDetails);
    if (updateSuccess) {
      dispatch(getTodos());
    }
    handleIsEditOn();
  }

  const toggleIsDone = async (id) => {
    const detailToUpdate = {
      isDone: !todo.isDone,
    };
    const toggleSuccess = await isDoneTodo(id, detailToUpdate);
    if (toggleSuccess) {
      dispatch(getTodos());
    }
  }

  const toggleIsFavoriteTodo = async (id) => {
    const detailToUpdate = {
      isFavorite: !todo.isFavorite,
    };
    const toggleSuccess = await isDoneTodo(id, detailToUpdate);
    if (toggleSuccess) {
      dispatch(getTodos());
    }
  }

  useEffect(() => {
    setNewTitle(todo.title);
  },[todo.title])


  
  return (
    <li className={css['app-todo-el']}>
      {isEditOn && <input value={newTitle} onChange={handleChangeInputValue} name='newTitle'/>}
      {isEditOn && <i className="fa fa-pencil" onClick={() => editTodo(todo._id)}></i>}
      {!isEditOn && <span className={todo.isDone ? css.doneTitle : ''} onClick={() => toggleIsDone(todo._id)}>{todo.title}</span>}
      {!isEditOn && <i className="fa fa-pencil" onClick={handleIsEditOn}></i>}
      <i onClick={() => deleteTodoItem(todo._id)} className="fa fa-trash"></i>
      <i onClick={() => toggleIsFavoriteTodo(todo._id)} className={todo.isFavorite ? "fa fa-star " + css.isFavorite : "fa fa-star"}></i>
    </li>
  )
}

export default TodoElement
