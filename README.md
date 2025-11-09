# Paradise Nursery - Houseplant Shopping Application

A beautiful React-based e-commerce application for browsing and purchasing houseplants.

## Features

- **Landing Page**: Welcome page with company information and a call-to-action button
- **Product Listing Page**: Browse houseplants organized by categories (Succulents, Tropical, Low Light)
- **Shopping Cart**: Manage your cart with quantity adjustments and item removal
- **Dynamic Cart Icon**: Real-time cart item count in the header
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with cart icon
│   └── Header.css
├── context/
│   └── CartContext.js     # Shopping cart state management
├── data/
│   └── plants.js          # Plant data and categories
├── pages/
│   ├── LandingPage.js     # Landing page component
│   ├── LandingPage.css
│   ├── ProductListingPage.js  # Product listing with filters
│   ├── ProductListingPage.css
│   ├── ShoppingCartPage.js    # Shopping cart management
│   └── ShoppingCartPage.css
├── App.js                 # Main app component with routing
├── App.css
├── index.js              # Entry point
└── index.css             # Global styles
```

## Technologies Used

- React 18
- React Router DOM 6
- CSS3 for styling

## Pages

### Landing Page (`/`)
- Background image
- Company description
- "Get Started" button linking to products

### Product Listing Page (`/products`)
- Header with navigation and cart icon
- Category filters
- Grid of plant cards with:
  - Thumbnail image
  - Plant name
  - Price
  - Add to Cart button

### Shopping Cart Page (`/cart`)
- Header with navigation
- Cart items with:
  - Thumbnail and name
  - Unit price
  - Quantity controls (increase/decrease)
  - Total price per item
  - Delete button
- Order summary with:
  - Total items count
  - Total cost
  - Continue Shopping button
  - Checkout button

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## License

This project is created for educational purposes.

