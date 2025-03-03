import { FooterProvider } from "../api/context/Footer";
import { ShopPacksProvider, ShopPacksContext } from "../api/context/ShopCart";
import { FooterList } from "../Footer/FooterList";
import { CiescoRefer } from "../refer/CiescoRefer";
import ShopCartList from "../ShopCart/ShopItem";
import { useContext } from "react";

const ItemPage = () => {
  return (
    <>
      <section>
        <ShopPacksProvider>
          <ShopCartList />
        </ShopPacksProvider>
      </section>
      <section>
        <CiescoRefer />
      </section>
      <section>
        <FooterProvider>
          <FooterList />
        </FooterProvider>
      </section>
    </>
  );
};

export default ItemPage;
