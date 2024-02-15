import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    isMode: false,
  },
  reducers: {
    setIsMode(state) {
      state.isMode = !state.isMode;
    },
  },
});
export const { setIsMode } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
