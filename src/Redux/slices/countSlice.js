import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'likesSlice',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    clear: (state, action) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, clear } = countSlice.actions;
export default countSlice.reducer;
