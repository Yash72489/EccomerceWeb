import React, { useContext } from "react";
import { ShopPacksContext } from "../../api/context/ShopCart";
import { FaGripfire } from "react-icons/fa";

export const Comp4 = () => {
  const context = useContext(ShopPacksContext);

  console.log("ShopPacksContext value:", context);

  if (!context || !context.sportdata) {
    return <div>Loading...</div>;
  }

  const { sportdata } = context;

  return (
    <div className="container-comp">
      {sportdata.length > 0 ? (
        sportdata.map((sport, index) => (
          <div className="content-kid" key={index}>
            <div className="img-container">
              <img src={sport.src} alt="img-kid" />
            </div>
            <p>
              <FaGripfire /> {sport.txt}
            </p>
            <h2>{sport.title}</h2>
          </div>
        ))
      ) : (
        <p>No kids data available.</p>
      )}
    </div>
  );
};
