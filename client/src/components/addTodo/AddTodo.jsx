import css from './AddTodo.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../utils/request';
import { getTodos } from './../../store/todoRedux';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const clearInput = () => {
    setInputValue('');
  }

  const addTodo = async () => {
    const newTodoDetail = {
      title: inputValue,
    };
    const successCreated = await createTodo(newTodoDetail);
    if (successCreated) {
      dispatch(getTodos());
    }
    clearInput();
  }

  return (
    <div className={css['add-todo-container']}>
        <i  className="fa fa-plus-circle add-icon" onClick={addTodo} ></i>
        <input
          type="text"
          placeholder="Add new Todo"
          value={inputValue}
          onChange={handleInput}
        />
      </div>
  )
}

export default AddTodo
