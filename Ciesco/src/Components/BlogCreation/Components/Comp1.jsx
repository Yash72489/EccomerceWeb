import React, { useContext } from "react";
import { ShopPacksContext } from "../../api/context/ShopCart";
import { FaGripfire } from "react-icons/fa";

export const Comp1 = () => {
  const context = useContext(ShopPacksContext);

  console.log("ShopPacksContext value:", context);

  if (!context || !context.kiddata) {
    
    return <div>Loading...</div>;
  }

  const { kiddata } = context;

  return (
    <div className="container-comp">
      {kiddata.length > 0 ? (
        kiddata.map((kid, index) => (
          <div className="content-kid" key={index}>
            <div className="img-container">
              <img src={kid.src} alt="img-kid" />
            </div>
            <p>
              <FaGripfire /> {kid.txt}
            </p>
            <h2>{kid.title}</h2>
          </div>
        ))
      ) : (
        <p>No kids data available.</p>
      )}
    </div>
  );
};
