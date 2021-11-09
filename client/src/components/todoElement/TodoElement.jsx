import { useDispatch } from 'react-redux';
import css from './TodoElement.module.css';
import { getTodos } from './../../store/todoRedux';
import { deleteTodo, updateTodo } from '../../utils/request';
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

  useEffect(() => {
    setNewTitle(todo.title);
  },[todo.title])


  
  return (
    <li className={css['app-todo-el']}>
      {isEditOn && <input value={newTitle} onChange={handleChangeInputValue} name='newTitle'/>}
      {!isEditOn && todo.title}
      {!isEditOn && <i className="fa fa-pencil" onClick={handleIsEditOn}></i>}
      {isEditOn && <i className="fa fa-pencil" onClick={() => editTodo(todo._id)}></i>}
      <i onClick={() => deleteTodoItem(todo._id)} className="fa fa-trash"></i>
    </li>
  )
}

export default TodoElement
