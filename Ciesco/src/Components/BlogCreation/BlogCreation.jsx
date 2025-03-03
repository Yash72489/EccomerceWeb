import React, { useState } from "react";
import { ButtonGroup } from "./Buttons/ButtonGroup";
import { TbMoodKid } from "react-icons/tb";
import { RiWomenLine } from "react-icons/ri";
import { FaRegChessQueen } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { AiOutlineMan } from "react-icons/ai";
import { Comp1 } from "./Components/Comp1";
import { Comp2 } from "./Components/Comp2";
import { Comp3 } from "./Components/Comp3";
import { Comp4 } from "./Components/Comp4";
import { Comp5 } from "./Components/Comp5";




import { ShopPacksProvider } from "../api/context/ShopCart"; 


const Rendercomp = ({ index }) => {
  switch (index) {
    case 0:
      return <Comp1 />;
    case 1:
      return <Comp2 />;
    case 2:
      return <Comp3 />;
    case 3:
      return <Comp4 />;
    case 4:
      return <Comp5 />;
    default:
      return null;
  }
};

const Btn = [
  { person: "kids", icon: <TbMoodKid /> },
  { person: "Womens", icon: <RiWomenLine /> },
  { person: "Beauty", icon: <FaRegChessQueen /> },
  { person: "Sports", icon: <CgGym /> },
  { person: "Mens", icon: <AiOutlineMan /> },
];

export const BlogCreation = () => {
  const [isSelected, setSelected] = useState(0);

  return (
    <ShopPacksProvider>
    
      <div className="container-blog">
        <div className="container-flex">
          <h1>Start exploring.</h1>
          <div className="content-buttons">
            <ButtonGroup
              button={Btn}
              isSelected={isSelected}
              setSelected={setSelected}
            />
          </div>
          <Rendercomp index={isSelected} />
        </div>
      </div>
    </ShopPacksProvider>
  );
};
