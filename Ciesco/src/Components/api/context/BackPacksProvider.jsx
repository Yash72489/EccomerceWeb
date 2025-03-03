import React, { createContext, useState } from "react";

// Create a Context
export const BackPacksContext = createContext();

export const BackPacksProvider = ({ children }) => {
  const [backPacks, setBackPacks] = useState([
    {
      src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/g24CMCW.MU001.3.webp?v=1714211139&width=1800&height=2400&crop=center",
      title: "Dark Denim Top",
      color: "Green",
      price: "$60.00",
      Cart: "Add to Cart",
    },
    {
      src: "https://img.freepik.com/free-vector/black-brown-leather-briefcases_98292-4124.jpg?uid=R158568764&ga=GA1.1.218264503.1724330709&semt=ais_hybrid",
      title: "Black Leather Bag",
      color: "Black",
      price: "$30.00",
      Cart: "Add to Cart",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/CMM6590.webp?v=1714211055&width=1400&height=2100&crop=center",
      title: "Blue Silk Tuxedo",
      color: "Pink",
      price: "$70.00",
      Cart: "Add to Cart",
    },
    {
      src: "https://img.freepik.com/free-photo/close-up-feet-wearing-warm-socks_23-2149271396.jpg?t=st=1739689851~exp=1739693451~hmac=818f150c3455878db4e647bfb758d1035b61e71d4d73d6cb3f2811151822f348&w=740",
      title: "Classic Varsity Top",
      color: " Black",
      price: "$60.00",
      Cart: "Add to Cart",
    },
  ]);

  return (
    <BackPacksContext.Provider value={{ backPacks, setBackPacks }}>
      {children}
    </BackPacksContext.Provider>
  );
};