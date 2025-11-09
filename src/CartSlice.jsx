import { createSlice } from '@reduxjs/toolkit';

// Initialize the cart state within the Redux store to keep track of cart items
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array - cart state in Redux store
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
      // Remove an item from the cart based on its name
      const itemName = action.payload.name;
      state.items = state.items.filter(item => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      // Extract the item's name and amount from the action.payload
      const { name, amount } = action.payload;
      
      // Look for the item in the state.items array that matches the extracted name
      const item = state.items.find(item => item.name === name);
      
      // If the item is found, update its quantity to the new amount
      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
