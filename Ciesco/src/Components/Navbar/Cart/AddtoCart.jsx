// src/Navbar/Cart/AddtoCart.js
import React, { useContext } from "react";
import { ShopPacksContext } from "../../api/context/ShopCart";

export const AddtoCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(ShopPacksContext);

  return (
    <div className="add-to-cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
