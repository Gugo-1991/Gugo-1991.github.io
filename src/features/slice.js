import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "",
    title: "title1",
    status: "To-do",
    description: "",
  },
  {
    id: "",

    title: "title2",
    status: "Done",
    description: "",
  },
];

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push({
        title: action.payload.title,
        status: "To-do",
        description: action.payload.description,
      });
    },
  },
});
export const { addItem } = columnSlice.actions;
export const selectContent = (state) => state.column;
