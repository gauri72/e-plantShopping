import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">🌿 Paradise Nursery</h1>
        <p className="landing-description">
          Welcome to Paradise Nursery, your one-stop destination for beautiful
          houseplants that bring life and freshness to your home. We offer a
          curated selection of healthy, vibrant plants perfect for any space,
          from low-light corners to sunny windowsills. Whether you're a seasoned
          plant parent or just starting your green journey, we have the perfect
          plant for you. Transform your living space into a lush paradise with
          our carefully selected collection of houseplants.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

