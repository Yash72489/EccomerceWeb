// src/Routes.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../page/HomePage";
import { Navbar } from "../../Navbar/Navbar";
import { ContactPage } from "../../page/ContactPage";
import { Error } from "../../error/Error";
import ItemPage from "../../page/ItemPage";
import { ShopPacksProvider } from "../../api/context/ShopCart";
import { AddtoCart } from "../../Navbar/Cart/AddtoCart";
import AboutPage from "../../page/AboutPage";
import { News } from "../../Feeds/News";
import Item1 from "../../ItemsPages/Pages/Item1";
// import Item2 from "../../ItemsPages/Pages/Item2"; // Import other item components as needed

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <HomePage />
      </ShopPacksProvider>
    ),
  },
  {
    path: "/contact",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <ContactPage />
      </ShopPacksProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <AboutPage />
      </ShopPacksProvider>
    ),
  },
  {
    path: "/item",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <ItemPage />
      </ShopPacksProvider>
    ),
  },
  {
    path: "/item/:id",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <Item1 />
      </ShopPacksProvider>
    ),
  },
  {
    path: "/addtocart",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <AddtoCart />
      </ShopPacksProvider>
    ),
  },
  {
    path: "*",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <Error />
      </ShopPacksProvider>
    ),
  },
  {
    path: "/news",
    element: (
      <ShopPacksProvider>
        <Navbar />
        <News />
      </ShopPacksProvider>
    ),
  },
  // Add more routes for other items as needed
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
