import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isMobileMenuVisible: boolean;
}

const initialState: UiState = {
  isMobileMenuVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsMobileMenuVisible(state, { payload }) {
      state.isMobileMenuVisible = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
