import React, { useContext } from "react";
import { BackPacksContext } from "../api/context/BackPacksProvider";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const BackPacksList = () => {
  const { backPacks } = useContext(BackPacksContext);
  console.log(backPacks);
    const navigate = useNavigate();

    const handleExplore = (e) => {
      e.preventDefault();
      navigate("/item");
    };
  

  return (
    <>
      <div className="container-baggage">
        <div className="title-baggage">
          <h1>
            New Arrivals. <span> REY backpacks & bagsss</span>
          </h1>
          <button onClick={handleExplore}>
            Explore Now <IoSearchOutline />
          </button>
        </div>
        <div className="grid-cart">
          {backPacks.map((backPack, index) => (
            <div key={index} className="carts-bag">
              <div className="img-cart">
                <img src={backPack.src} alt="img-cart" height="280px" />
              </div>
              <h3>{backPack.title}</h3>
              <p>{backPack.color}</p>
              <div className="btn-Cart">
                <p>{backPack.price}</p>
                <button>{backPack.Cart}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackPacksList;
