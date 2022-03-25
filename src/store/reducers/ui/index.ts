import { createSlice } from '@reduxjs/toolkit';
import { uiState } from './types';

const initialState: uiState = {
  isLoginModalVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,

  reducers: {
    setIsLoginModalVisible(state, { payload }) {
      state.isLoginModalVisible = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
