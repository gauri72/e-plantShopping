import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🌿 Paradise Nursery</h1>
        </Link>
        <nav className="nav">
          {location.pathname !== '/products' && (
            <Link to="/products" className="nav-link">
              Plants
            </Link>
          )}
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="nav-link cart-link">
              <span className="cart-icon">🛒</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          )}
          {location.pathname === '/products' && (
            <Link to="/cart" className="nav-link cart-link">
              <span className="cart-icon">🛒</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          )}
          {location.pathname === '/cart' && (
            <Link to="/products" className="nav-link">
              Plants
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

