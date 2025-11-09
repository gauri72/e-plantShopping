import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalCost } =
    useCart();

  const totalItems = getTotalItems();
  const totalCost = getTotalCost();

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart-page">
        <Header />
        <div className="cart-container">
          <h2 className="page-title">Shopping Cart</h2>
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-container">
        <h2 className="page-title">Shopping Cart</h2>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-unit-price">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  <p className="cart-item-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="summary-section">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-row">
                <span>Total Items:</span>
                <span className="summary-value">{totalItems}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total Cost:</span>
                <span className="summary-value">${totalCost.toFixed(2)}</span>
              </div>
            </div>
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

