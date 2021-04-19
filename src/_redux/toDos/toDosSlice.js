import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  toDos: [],
};

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState: { ...initialState },
  reducers: {
    addToDo: (state, action) => {
      const { payload } = action;
      state.toDos.push(payload);
    },
    deleteToDo: (state, action) => {
      const { payload } = action;
      state.toDos = state.toDos.filter((toDo) => toDo.id !== payload);
    },
    changeTitleAndAddToDo: (state) => {},
  },
});

export const { addToDo, deleteToDo } = toDosSlice.actions;
export const toDosActions = toDosSlice.actions;

export default toDosSlice.reducer;
