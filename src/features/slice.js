import { createSlice } from "@reduxjs/toolkit";
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
      };
      const newState = [...state, newItem];
      localStorage.setItem("items", JSON.stringify(newState));
      return newState;
    },

    changeStatus: (state, action) => {
      const itemToUpdate = state.filter(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate) {
        state.map((item) => {
          if (item.id === action.payload.id) {
            item.status = action.payload.status;

            localStorage.setItem("items", JSON.stringify([...state]));
          }
          return item;
        });
      }
    },
  },
});

export const { addItem, changeStatus } = columnSlice.actions;
export const selectContent = (state) => state.column;

export default columnSlice.reducer;
