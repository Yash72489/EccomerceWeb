import React from 'react'
import { ShopPacksProvider } from '../api/context/ShopCart';
import ShopCartList from '../ShopCart/ShopItem';


export const Error = () => {
  return (
    <>
    <section>
      <h1 style={{marginTop:"200px" ,textAlign:"center"}}>No Data Found.... <p>Watch Our Products</p></h1>
    </section>
      <section>
        <ShopPacksProvider>
          <ShopCartList />
        </ShopPacksProvider>
      </section>
    </>
  );
}

