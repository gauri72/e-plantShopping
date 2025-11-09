import React from 'react';
// Redux integration: Import hooks and actions
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  // Access the Redux store to retrieve cart items
  const cart = useSelector(state => state.cart.items);
  // Initialize Redux: Get dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      // Extract numeric value from cost string (e.g., "$15" -> 15)
      const unitPrice = parseFloat(item.cost.substring(1));
      total += unitPrice * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    // Call the onContinueShopping function passed from the parent component
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // Use the updateQuantity action to change how many items are in the cart (increment)
  const handleIncrement = (item) => {
    // Dispatch updateQuantity with quantity increased by 1
    dispatch(updateQuantity({
      name: item.name,
      amount: item.quantity + 1
    }));
  };

  // Use the updateQuantity action to change how many items are in the cart (decrement)
  const handleDecrement = (item) => {
    // If the item's quantity is greater than 1, decrease the quantity by 1
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        name: item.name,
        amount: item.quantity - 1
      }));
    } else {
      // If quantity would drop to 0, use removeItem action to delete the item completely from the cart
      dispatch(removeItem(item));
    }
  };

  // Use the removeItem action to delete an item completely from the cart
  const handleRemove = (item) => {
    // Dispatch removeItem action to delete the item from the cart
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    // Extract the numeric value from the item's cost string using parseFloat(item.cost.substring(1))
    const unitPrice = parseFloat(item.cost.substring(1));
    // Multiply quantity with unit price
    return (unitPrice * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


