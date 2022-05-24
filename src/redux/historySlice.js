import {createSlice} from '@reduxjs/toolkit';
import Storage from '../utils/storage';
import {HISTORIES_KEY} from '../utils/constants';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    histories: [],
  },
  reducers: {
    addHistory: (state, action) => {},
    addHistorySuccess: (state, action) => {
      state.histories = [...action.payload];
    },
    addHistoryFailure: (state, action) => {
      state.histories = [];
    },
    removeHistory: async (state, action) => {
      state.histories.splice(action.payload, 1);
      await Storage.setItem(HISTORIES_KEY, state.histories);
    },
  },
});
export const {addHistory, addHistorySuccess} = historySlice.actions;
export const selectHistories = state => state.history.histories;
export default historySlice.reducer;
