import React, { useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import { plants, categories } from '../data/plants';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredPlants =
    selectedCategory === 'All'
      ? plants
      : plants.filter((plant) => plant.category === selectedCategory);

  return (
    <div className="product-listing-page">
      <Header />
      <div className="product-container">
        <h2 className="page-title">Our Plant Collection</h2>
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="plants-grid">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image-container">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-category">{plant.category}</p>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(plant)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;

