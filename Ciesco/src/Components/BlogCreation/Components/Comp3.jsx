import React, { useContext } from "react";
import { ShopPacksContext } from "../../api/context/ShopCart";
import { FaGripfire } from "react-icons/fa";

export const Comp3 = () => {
  const context = useContext(ShopPacksContext);

  console.log("ShopPacksContext value:", context);

  if (!context || !context.beautydata) {
    return <div>Loading...</div>;
  }

  const { beautydata } = context;

  return (
    <div className="container-comp">
      {beautydata.length > 0 ? (
        beautydata.map((beauty, index) => (
          <div className="content-kid" key={index}>
            <div className="img-container">
              <img src={beauty.src} alt="img-kid" />
            </div>
            <p>
              <FaGripfire /> {beauty.txt}
            </p>
            <h2>{beauty.title}</h2>
          </div>
        ))
      ) : (
        <p>No kids data available.</p>
      )}
    </div>
  );
};
