import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === newItem.name);
      
      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
