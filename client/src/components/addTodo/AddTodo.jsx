import css from './AddTodo.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../utils/request';
import { getTodos } from './../../store/todoRedux';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [formErrors, setFormErrors] = useState(false);
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
    const successValidation = validated(newTodoDetail.title);
    if (successValidation) {
      const successCreated = await createTodo(newTodoDetail);
      successCreated && dispatch(getTodos());
    }
    clearInput();
  }

  const validated = (value) => {
    const failValidation = value.trim() === '';
    setFormErrors(failValidation);
    return !failValidation;
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
        {formErrors && <p>Input Field is required</p>}
      </div>
  )
}

export default AddTodo
