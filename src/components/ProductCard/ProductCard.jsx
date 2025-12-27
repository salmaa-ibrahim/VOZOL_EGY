
import React from "react";
// import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import "./ProductCard.css";
import { useNavigate , Link } from "react-router-dom";
export default function ProductCard({ product }) {
  const { addItem } = useCart();
  // const [flavor, setFlavor] = useState(product.flavor || "");
  const navigate = useNavigate();
  const handleBuyNow = () => {
    addItem(product);
    navigate("/checkout");
  };
  const handleAddToCart = () => {
    addItem(product);
    alert("تمت إضافة المنتج إلى العربة!");
  };
  return (
    <div className="product-card">
      {product.rank && <div className="rank">{product.rank}</div>}
      <Link to={`/products/${product.id}`}>
        <div className="image-container">
          <img src={product.img} alt={product.name} />
        </div>
      </Link>
      <p>{product.flavor} <br /> <span className={product.inStock ? "In-Stock" : "Out-of-Stock"}>{product.inStock ? "In Stock" : "Out of Stock"}</span> 
                                 <span className={product.sale ? "Sale" : ""}>{product.sale ? "Sale" : ""}</span> 
      </p>
      <div className="meta">{product.name}</div>
      {/* <div className="description">{product.description}</div> */}
      <div className="price"> <span>EGP {product.price} <span className="old-price">{product.oldPrice}</span></span></div> 
      <div className="actionsBtn">
        <button className="btn" onClick={handleAddToCart}>
          Add to cart
        </button>
        <button className="btn primary" onClick={handleBuyNow}>
          Buy now
        </button>
      </div>
    </div>
  );
}
