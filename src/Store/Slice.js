import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    isMode: false,
    attempts: 3,
  },
  reducers: {
    setIsMode(state) {
      state.isMode = !state.isMode;
    },
    changeAttempts(state) {
      state.attempts = state.attempts - 1;
      console.log(state.attempts);
    },
    clearAttempts(state) {
      state.attempts = 3;
    },
  },
});
export const { setIsMode, changeAttempts, clearAttempts } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
