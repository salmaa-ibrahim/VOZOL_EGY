// import React from "react";
// // import { useState } from "react";
// import { useCart } from "../../contexts/CartContext";
// import "./ProductCard.css";
// import { useNavigate, Link } from "react-router-dom";
// export default function ProductCard({ product }) {
//   const { addItem } = useCart();
//   // const [flavor, setFlavor] = useState(product.flavor || "");
//   const navigate = useNavigate();
//   const handleBuyNow = () => {
//     addItem(product);
//     navigate("/checkout");
//   };
//   const handleAddToCart = () => {
//     addItem(product);
//     alert("تمت إضافة المنتج إلى العربة!");
//   };
//   return (
//     <div className="product-card product-gift-frame">
//       {product.rank && <div className="rank">{product.rank}</div>}
//       <Link to={`/products/${product.id}`}>
//         <div className="image-container">
//           <img src={product.img} alt={product.name} />
//         </div>
//       </Link>
//       <p className="flavor-info">
//         {product.flavor} <br />{" "}
//         <span className={product.inStock ? "In-Stock" : "Out-of-Stock"}>
//           {product.inStock ? "In Stock" : "Out of Stock"}
//         </span>
//         <span className={product.sale ? "Sale" : ""}>
//           {product.sale ? "Sale" : ""}
//         </span>
//       </p>
//       <div className="meta">{product.name}</div>
//       {/* <div className="description">{product.description}</div> */}
//       <div className="price">
//         {" "}
//         <span>
//           EGP {product.price}{" "}
//           <span className="old-price">{product.oldPrice}</span>
//         </span>
//       </div>
//       <div className="actionsBtn">
//         <button className="btn" onClick={handleAddToCart}>
//           Add to cart
//         </button>
//         <button className="btn primary" onClick={handleBuyNow}>
//           Buy now
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useCart } from "../../contexts/CartContext";
import "./ProductCard.css";
import { useNavigate, Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addItem(product);
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    addItem(product);
    alert("تمت إضافة المنتج إلى العربة!");
  };

  const handleWhatsAppOrder = () => {
    // رقم الهاتف الذي سيتم إرسال الرسالة إليه
    const phoneNumber = "201141341192"; // استبدل برقمك الحقيقي

    // // رابط المنتج (افتراضي)
    // const productUrl =  `https://www.vozolegy.com/products/${product.name.replace(/\s+/g, '-').toLowerCase()}/${product.flavor ? product.flavor.replace(/\s+/g, '-').toLowerCase() : ''}`;

    // إنشاء نص الرسالة مع تفاصيل المنتج
    const message =
      `مرحباً، أريد طلب المنتج التالي:\n\n` +
      `🔹 اسم المنتج: ${product.name}\n` +
      `🔹 السعر: EGP ${product.price}\n` +
      `🔹 النكهة: ${product.flavor || "غير محدد"}\n`;
    //  `🔹 الرابط: ${productUrl}\n\n` +
    //  `أرجو مساعدتي في:\n` +
    //  `1️⃣ اختيار النوع المناسب\n` +
    //  `2️⃣ اختيار النكهة المناسبة\n` +
    //  `3️⃣ تأكيد السعر النهائي\n` +
    //  `4️⃣ تحديد الكمية المناسبة\n\n` +

    // ترميح النص للرابط
    const encodedMessage = encodeURIComponent(message);

    // إنشاء رابط الواتساب
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="product-card product-gift-frame">
      {product.rank && <div className="rank">{product.rank}</div>}
      <Link to={`/products/${product.id}`}>
        <div className="image-container">
          <img src={product.img} alt={product.name} />
        </div>
      </Link>
      <p className="flavor-info">
        {product.flavor} <br />{" "}
        <span className={product.inStock ? "In-Stock" : "Out-of-Stock"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <span className={product.sale ? "Sale" : ""}>
          {product.sale ? "Sale" : ""}
        </span>
      </p>
      <div className="meta">{product.name}</div>
      <div className="price">
        <span>
          EGP {product.price}{" "}
          <span className="old-price">{product.oldPrice}</span>
        </span>
      </div>

      <div className="actionsBtn">
        <div className="main-actions">
          <button className="btn" onClick={handleAddToCart}>
            Add to cart
          </button>
          <button className="btn" onClick={handleBuyNow}>
            Buy now
          </button>
        </div>
        <div className="whatsapp-btn">
          <button className="whatsapp-btn-layout " onClick={handleWhatsAppOrder}>
            Order via WhatsApp
            <img className="whatsapp-icon" src="/assets/social media icons/whatsapp_icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
