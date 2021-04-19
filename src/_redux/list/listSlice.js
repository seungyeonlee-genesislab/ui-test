import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isLoading: false,
  error: '',
};

export const listSlice = createSlice({
  name: 'list',
  initialState: { ...initialState },
  reducers: {
    getListRequest: (state) => {
      state.isLoading = true;
    },
    getListSuccess: (state, action) => {
      const { payload } = action;
      state.list = payload;
      state.isLoading = false;
    },
    getListFail: (state, action) => {
      const { payload } = action;
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice.reducer;
