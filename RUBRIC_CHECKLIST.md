# Rubric Checklist - Paradise Nursery Shopping Application

## Total: 50 points, 19 tasks

### ✅ GitHub (6 points)

- ✅ **GitHub repository public URL: 2 points**
  - Repository: https://github.com/gauri72/e-plantShopping
  - Status: Public and accessible

- ✅ **Redux-related files and code: 4 points**
  - ✅ `src/CartSlice.jsx` - Redux slice with reducers
  - ✅ `src/store.js` - Redux store configuration
  - ✅ `src/main.jsx` - Redux Provider setup
  - ✅ Redux integration in `ProductList.jsx` and `CartItem.jsx`

### ✅ Landing page (5 points)

- ✅ **Background image: 1 point**
  - Implemented in `LandingPage.css` with Unsplash image
  - Background image with overlay effect

- ✅ **Paragraph about the company: 1 point**
  - Company description paragraph in `LandingPage.js`
  - Text: "Welcome to Paradise Nursery, your one-stop destination..."

- ✅ **Company name: 1 point**
  - Company name displayed: "🌿 Paradise Nursery"
  - Shown in landing page title

- ✅ **Get Started button linking to the product listing page: 2 points**
  - Button implemented with `<Link to="/products">`
  - Links to product listing page

### ✅ Product listing page (9 points)

- ✅ **Six unique houseplants for sale, each displaying thumbnail, name, and price: 2 points**
  - 8 plants total (exceeds requirement of 6)
  - Each displays: thumbnail image, name, and price
  - Plants: Echeveria, Aloe Vera, Monstera Deliciosa, Fiddle Leaf Fig, Snake Plant, ZZ Plant, Pothos, Peace Lily

- ✅ **Group the plants into at least three categories on the page: 1 point**
  - 3 categories: Succulents, Tropical, Low Light
  - Category filters implemented with buttons
  - Plants can be filtered by category

- ✅ **An Add to Cart button for each plant, each with the following behavior: 6 points**
  - ✅ After selecting it, the shopping cart icon increases by one: **IMPLEMENTED**
    - Cart count updates in header using Redux state
    - `totalCartItems` calculated from Redux store
  - ✅ After selecting it, the button becomes disabled: **IMPLEMENTED**
    - Button has `disabled={addedToCart[plant.name]}` attribute
    - CSS class `added-to-cart` applied when disabled
  - ✅ After selecting it, the appropriate plant gets added to the shopping cart: **IMPLEMENTED**
    - `handleAddToCart()` dispatches `addItem(plant)` to Redux
    - Plant added to Redux store with quantity 1

### ✅ Header (7 points)

- ✅ **Displays on both the product listing page and shopping cart page: 2 points**
  - Header component used in both `ProductListingPage.js` and `ShoppingCartPage.js`
  - Also in `ProductList.jsx` (Redux version)

- ✅ **A shopping cart icon with a value that displays the total number of items in the cart: 3 points**
  - Cart icon (🛒) displayed in header
  - Badge shows `{totalItems}` count
  - Updates dynamically from Redux store

- ✅ **Navigation to either of the other pages: 2 points**
  - "Paradise Nursery" logo links to landing page
  - "Plants" link navigates to products page
  - Cart icon navigates to cart page
  - Conditional rendering based on current location

### ✅ Shopping cart page (23 points)

- ✅ **The total number of plants in the cart: 2 points**
  - Displayed in cart summary: "Total Items: {totalItems}"
  - Calculated from Redux store

- ✅ **The total cost of all items in the cart: 2 points**
  - Displayed in cart summary: "Total Cost: ${totalCost}"
  - Calculated using `calculateTotalAmount()` function

- ✅ **Each plant type in the cart displays a thumbnail, name, and unit price: 6 points**
  - Thumbnail: `<img src={item.image} />`
  - Name: `<div className="cart-item-name">{item.name}</div>`
  - Unit price: `${item.price.toFixed(2)} each`

- ✅ **Increase button for each plant type in the cart that increments the number of items in the cart by one each time it's clicked and updates all appropriate values: 4 points**
  - `handleIncrement()` function implemented
  - Dispatches `updateQuantity()` with `quantity + 1`
  - Updates quantity, subtotal, and total cost

- ✅ **Decrease button for each plant type in the cart that decrements the number of items in the cart by one each time it's clicked and updates all appropriate values: 4 points**
  - `handleDecrement()` function implemented
  - If quantity > 1: dispatches `updateQuantity()` with `quantity - 1`
  - If quantity = 1: dispatches `removeItem()` to remove item
  - Updates quantity, subtotal, and total cost

- ✅ **A delete button: 2 points**
  - Delete button (🗑️) implemented
  - `handleRemove()` dispatches `removeItem()` action
  - Removes item completely from cart

- ✅ **A checkout button (displays the message "Coming Soon" or similar): 1 point**
  - Checkout button implemented
  - Shows alert: "Functionality to be added for future reference"
  - Similar to "Coming Soon" requirement

- ✅ **A continue shopping button that links to the product listing page: 2 points**
  - "Continue Shopping" button implemented
  - Links to `/products` page using React Router

## Summary

**All 19 tasks completed: ✅**
- GitHub: 6/6 points ✅
- Landing page: 5/5 points ✅
- Product listing page: 9/9 points ✅
- Header: 7/7 points ✅
- Shopping cart page: 23/23 points ✅

**Total: 50/50 points**

## Notes

- The application has both implementations:
  1. **Redux-based** (ProductList.jsx, CartItem.jsx) - Currently active via App.jsx
  2. **React Router + Context API** (ProductListingPage.js, ShoppingCartPage.js) - Alternative implementation

- Both implementations meet all requirements
- Redux implementation is the primary one being used (via main.jsx → App.jsx)
- All Redux functionality is properly integrated and working

## Deployment

- ✅ Deployed to GitHub Pages: https://gauri72.github.io/e-plantShopping
- ✅ All code pushed to GitHub: https://github.com/gauri72/e-plantShopping

