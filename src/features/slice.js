import { createSlice } from "@reduxjs/toolkit";
import { statuses } from "../Components/status";
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
      const { id, status } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);

      if (itemToUpdate && itemToUpdate.rule !== "Task") {
        const currentIndex = statuses.indexOf(itemToUpdate.status);
        const targetIndex = statuses.indexOf(status);

        if (
          currentIndex !== -1 &&
          targetIndex !== -1 &&
          (targetIndex === currentIndex + 1 || targetIndex === currentIndex - 1)
        ) {
          itemToUpdate.status = status;
          localStorage.setItem("items", JSON.stringify([...state]));
        }
      }

      if (itemToUpdate && itemToUpdate.rule === "Task") {
        state.forEach((item) => {
          if (item.id === id) {
            item.status = status;
            localStorage.setItem("items", JSON.stringify([...state]));
          }
        });
      }
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
