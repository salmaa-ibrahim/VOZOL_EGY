import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Header.css";
// import logo from "../../../assets/logo.svg";
import logo2 from "../../../public/assets/Icons/vozolIcon.jpeg";
import logo from "../../../public/assets/Icons/VOZOL LOGO.svg";
import instagramIcon from "../../../assets/social media icons/instagram_icon.svg";
import facebookIcon from "../../../assets/social media icons/facebook_icon.svg";
import whatsappIcon from "../../../assets/social media icons/whatsapp_icon.svg";
import tiktokIcon from "../../../assets/social media icons/tiktok_icon.svg";
import cartIcon from "../../../assets/cart/cart_icon.svg";
import CartSidebar from "../CartSidebar/CartSidebar";
export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const { items } = useCart();
  const { getCartItemsCount } = useCart();
  // const navigate = useNavigate();
  // const [lang, setLang] = useState("EN");

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" aria-hidden href="/">
          <img src={logo} alt="Logo" className="logoImg" />
          <img src={logo2} alt="logo" className="egy" />
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
          <a
            className="social disapper"
            href="https://www.instagram.com/vozol_egy?igsh=cWc5ZnU4aTJlN25v"
            target="_blank"
          >
            <img src={instagramIcon} alt="" />
          </a>
          <a
            className="social disapper"
            href="https://www.facebook.com/share/17G6ZiBo2m/?mibextid=wwXIfr"
            target="_blank"
          >
            <img src={facebookIcon} alt="" />
          </a>
          <a
            className="social disapper"
            href="https://wa.me/201141341192?text=مرحباً، أريد الاستفسار عن المنتجات"
            target="_blank"
          >
            <img src={whatsappIcon} alt="" />
          </a>
          <a
            className="social disapper"
            href="https://www.tiktok.com/@vozol.egy?_t=ZS-90SMD4tlqIZ&_r=1"
            target="_blank"
          >
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
