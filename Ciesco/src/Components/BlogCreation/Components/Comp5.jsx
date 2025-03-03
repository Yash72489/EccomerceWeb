import React, { useContext } from "react";
import { ShopPacksContext } from "../../api/context/ShopCart";
import { FaGripfire } from "react-icons/fa";

export const Comp5 = () => {
  const context = useContext(ShopPacksContext);

  console.log("ShopPacksContext value:", context);

  if (!context || !context.mensdata) {
    return <div>Loading...</div>;
  }

  const { mensdata } = context;

  return (
    <div className="container-comp">
      {mensdata.length > 0 ? (
        mensdata.map((mens, index) => (
          <div className="content-kid" key={index}>
            <div className="img-container">
              <img src={mens.src} alt="img-kid" />
            </div>
            <p>
              <FaGripfire /> {mens.txt}
            </p>
            <h2>{mens.title}</h2>
          </div>
        ))
      ) : (
        <p>No kids data available.</p>
      )}
    </div>
  );
};
