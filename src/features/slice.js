import { createSlice } from "@reduxjs/toolkit";
import { ChangeStatus } from "./hooks";
const storedItems = localStorage.getItem("items");
let initialState = [];
if (storedItems) {
  const items = JSON.parse(storedItems);
  initialState = items;
}

export const columnSlice = createSlice({
  name: "column",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        status: "Backlog",
        description: action.payload.description,
        rule: action.payload.rule,
      };
      const newState = [...state, newItem];
      localStorage.setItem("items", JSON.stringify(newState));
      return newState;
    },

    changeStatus: (state, action) => {
      ChangeStatus(state, action);
    },

    deleteItem: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);

      localStorage.setItem("items", JSON.stringify(newState));

      return newState;
    },
  },
});

export const { addItem, changeStatus, deleteItem } = columnSlice.actions;
export const selectContent = (state) => state.column;

export default columnSlice.reducer;
