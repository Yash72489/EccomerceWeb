// src/Navbar/Navbar.js
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/src/image";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { ShopPacksContext } from "../api/context/ShopCart";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const { count } = useContext(ShopPacksContext);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img className="ciesco-logo" src={logo} alt="logo" />
        <div className="dropdown">
          <p
            className="dropdown-toggle"
            id="shopDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Feeds
          </p>
          <ul className="dropdown-menu" aria-labelledby="shopDropdown">
            <li>
              <NavLink
                className="dropdown-item"
                to="/news"
                onClick={() => handleSetActiveLink("news")}
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cart-icon-mobile">
          <LuShoppingCart className="icon-bar" />
          <span className="cart-count">{count}</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                to="/"
                onClick={() => handleSetActiveLink("home")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                to="/about"
                onClick={() => handleSetActiveLink("about")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                to="/contact"
                onClick={() => handleSetActiveLink("contact")}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "items" ? "active" : ""}`}
                to="/item"
                onClick={() => handleSetActiveLink("items")}
              >
                Items
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="icon-logo">
          <div>
            <MdOutlinePersonOutline className="icon-bar" />
          </div>
          <div>
            <NavLink
              className={`nav-link ${
                activeLink === "addtocart" ? "active" : ""
              }`}
              to="/addtocart"
              onClick={() => handleSetActiveLink("addtocart")}
            >
              <LuShoppingCart className="icon-bar" />
              <span className="cart-count">{count}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
