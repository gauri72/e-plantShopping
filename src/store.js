// Importing Necessary Functions and Files:
// The configureStore() function from the @reduxjs/toolkit package is imported to set up the Redux store.
import { configureStore } from '@reduxjs/toolkit';
// The cartReducer from the CartSlice.jsx file which is imported, manages the state slice related to the shopping cart.
import cartReducer from './CartSlice';

// Configuring the Store:
// The configureStore() function is used to setup the Redux store.
// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});

// Exporting the Store:
// The configured Redux store is exported using export default store;, so it can be used throughout the application to manage state.
export default store; // Export the store for use in the app (e.g., in <Provider store={store}>)
