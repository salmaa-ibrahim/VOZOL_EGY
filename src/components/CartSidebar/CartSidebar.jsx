// // components/CartSidebar/CartSidebar.jsx
// export default CartSidebar;

import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("عربة التسوق فارغة. أضف بعض المنتجات أولاً.");
      return;
    }

    onClose();
    navigate("/checkout");
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="cart-content">
        {items.length === 0 ? (
          <p className="empty-cart">Shopping Cart Empty</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Price: {item.price} EGP</p>
                    <p>Flavor: {item.flavor} </p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                     ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <p>Total  <span>{getCartTotal()} EGP</span></p>
                <p>Shipping  <span>FREE</span></p>
                {/* <p>Grand Total  <span>{getCartTotal() + 30} EGP</span></p> */}
                <p>Grand Total  <span>{getCartTotal()} EGP</span></p>
                {/* <p>Discount  <span>{getCartTotal() > 1000 ? 100 : 0} EGP</span></p> */}
              </div>

              <div className="cart-actions">
                <button onClick={clearCart} className="clear-btn">
                  Clear Cart
                </button>
                <button onClick={handleCheckout} className="checkout-btn">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
