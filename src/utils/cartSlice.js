import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
      items: [],
  },
    reducers : {
      addItem: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if item exists
        } else {
            state.items.push({ ...action.payload, quantity: 1 }); // Add new item
        }
      },
      removeItem:(state,action)=>{
        const index = state.items.findIndex(item => item.id === action.payload.id);
          if (index !== -1) {
              state.items.splice(index, 1); // Remove item from the array
          }
      },
      updateItemQuantity(state, action) {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index].quantity = action.payload.quantity;
        }
      }
    }
})

export const {addItem, removeItem, updateItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;

