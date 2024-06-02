import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload.id);
    },
    switchTodoComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        };
      });
    },

  },
});

export const { addTodo, deleteTodo, switchTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
