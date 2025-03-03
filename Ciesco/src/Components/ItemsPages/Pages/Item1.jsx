// src/ItemsPages/Pages/Item1.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopPacksContext } from "../../api/context/ShopCart";

const Item1 = () => {
  const { id } = useParams();
  const { shopPacks, addToCart, removeFromCart } = useContext(ShopPacksContext);
  const item = shopPacks.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div className="item-not-found">Item not found</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-image-container">
        <img src={item.image} alt={item.title} className="item-image" />
      </div>
      <div className="item-info">
        <h1 className="item-title">{item.title}</h1>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price}</p>
        <div className="item-actions">
          <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
          <button
            className="remove-from-cart-btn"
            onClick={() => removeFromCart(item)} // Pass the entire item object
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item1;
