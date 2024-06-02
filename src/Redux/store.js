import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/countSlice';
import todoReducer from './slices/todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
