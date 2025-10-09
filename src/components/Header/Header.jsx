import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Header.css";
// import logo from "../../../assets/logo.svg";
import logo2 from "../../../public/assets/Icons/vozolIcon.jpeg"
import logo from "../../../public/assets/Icons/VOZOL LOGO.svg"
import instagramIcon from "../../../assets/social media icons/instagram_icon.svg";
import facebookIcon from "../../../assets/social media icons/facebook_icon.svg";
import whatsappIcon from "../../../assets/social media icons/whatsapp_icon.svg";
import tiktokIcon from "../../../assets/social media icons/tiktok_icon.svg";
import cartIcon from "../../../assets/cart/cart_icon.svg";
import CartSidebar from "../CartSidebar/CartSidebar";
export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  // const [lang, setLang] = useState("EN");

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" aria-hidden href="/">
          <img src={logo} alt="Logo" className="logoImg" />
          <img src={logo2} alt="logo"  className="egy"/>
          {/* <p>
            <p></p> <sub className="sitename">egy</sub>
          </p> */}
        </a>

        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          {/* <NavLink 
            to="/top-products" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Top
          </NavLink> */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>
        </nav>

        <div className="actions">
          {/* <button
            className="lang-btn"
            onClick={() => setLang((l) => (l === "EN" ? "AR" : "EN"))}
          >
            {lang}
          </button> */}
          <a className="social disapper" href="#">
            <img src={instagramIcon} alt="" />
          </a>
          <a className="social disapper" href="#">
            <img src={facebookIcon} alt="" />
          </a>
          <a className="social disapper" href="#">
            <img src={whatsappIcon} alt="" />
          </a>
          <a className="social disapper" href="#">
            <img src={tiktokIcon} alt="" />
          </a>
          {/* زر عربة التسوق */}
          <button
            className="cart-btn social"
            onClick={() => setIsCartOpen(true)}
          >
            <img src={cartIcon} alt="" />
            {getCartItemsCount() > 0 && (
              <span className="cart-count">{getCartItemsCount()}</span>
            )}
          </button>
        </div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Overlay when cart is open */}
      <div
        className={`cart-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
    </header>
  );
}
