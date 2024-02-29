import { configureStore } from "@reduxjs/toolkit";
import { gamesReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});
