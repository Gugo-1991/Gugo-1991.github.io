import { configureStore } from "@reduxjs/toolkit";
import { columnSlice } from "../features/slice";

export const store = configureStore({
  reducer: {
    column: columnSlice.reducer,
  },
});
