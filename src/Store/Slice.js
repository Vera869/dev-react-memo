import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    isMode: false,
    attempts: 3,
    leaders: [],
    currentLevel: null,
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
    setLeaders(state, action) {
      state.leaders = action.payload;
    },
    setCurrentLevel(state, action) {
      state.currentLevel = action.payload;
    },
  },
});
export const { setIsMode, changeAttempts, clearAttempts, setLeaders, setCurrentLevel } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
