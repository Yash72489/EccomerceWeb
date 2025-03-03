import React, { useContext } from "react";
import { ShopPacksContext } from "../../api/context/ShopCart";
import { FaGripfire } from "react-icons/fa";

export const Comp2 = () => {
  const context = useContext(ShopPacksContext);

  console.log("ShopPacksContext value:", context);

  if (!context || !context.womendata) {
    return <div>Loading...</div>;
  }

  const { womendata } = context;

  return (
    <div className="container-comp">
      {womendata.length > 0 ? (
        womendata.map((women, index) => (
          <div className="content-kid" key={index}>
            <div className="img-container">
              <img src={women.src} alt="img-kid" />
            </div>
            <p>
              <FaGripfire /> {women.txt}
            </p>
            <h2>{women.title}</h2>
          </div>
        ))
      ) : (
        <p>No kids data available.</p>
      )}
    </div>
  );
};
