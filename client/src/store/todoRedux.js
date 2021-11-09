import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllTodoUrl = 'http://localhost:4000/todos';
export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  try {
    const response = await axios.get(getAllTodoUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = { todos: [], status: null };
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoSample(state, action) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.status = 'success';
    },
    [getTodos.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
