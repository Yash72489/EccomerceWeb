// src/ShopCartList.js
import React, { useContext } from "react";
import { ShopPacksContext } from "../api/context/ShopCart";
import { Link, useNavigate } from "react-router-dom";

const ShopCartList = () => {
  const { shopPacks, addToCart } = useContext(ShopPacksContext);
  const navigate = useNavigate();

  const handleClick = (shopPack) => {
    navigate(`/item/${shopPack.id}`);
  };

  return (
    <>
      <div className="container-Shoppack">
        <div className="title-shop">
          <h1>
            All Products.. <span> Items</span>
          </h1>
          <p>
            <Link to="/" className="link">
              Home
            </Link>{" "}
            /<span className="spann">All Product</span>
          </p>
        </div>
        <div className="grid-Shopcart">
          {shopPacks.map((shopPack, index) => (
            <div
              key={index}
              className="carts-bag-item"
              onClick={() => handleClick(shopPack)}
            >
              <div className="img-cart-shop">
                <img src={shopPack.image} alt="img-cart" height="280px" />
              </div>
              <h3>{shopPack.title}</h3>
              <p>{shopPack.category}</p>
              <div className="btn-Cart-shop">
                <p>${shopPack.price}</p>
                <button onClick={() => addToCart(shopPack)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCartList;
