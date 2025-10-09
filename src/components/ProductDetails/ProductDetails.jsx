import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "../../contexts/CartContext";

// استيراد البيانات - هي الآن كائن وليس مصفوفة
import productsData from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔍 Product ID from URL:", id);
    console.log("📦 Imported data structure:", productsData);

    // البيانات تأتي ككائن فيه خاصية products التي تحتوي على المصفوفة
    // لذلك نستخدم productsData.products.find بدلاً من productsData.find
    const productsArray = productsData.products || [];
    console.log("📦 Products array:", productsArray);

    const productId = parseInt(id);
    const foundProduct = productsArray.find((p) => p.id === productId);
    console.log("✅ Found product:", foundProduct);

    setProduct(foundProduct);
    setLoading(false);
  }, [id]);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (product) {
      alert(`تم إضافة ${product.name} إلى السلة`);
      addItem(product);
    }
  };
  const handleBuyNow = () => {
    addItem(product);
    navigate("/checkout");
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <div className="loading">جاري تحميل المنتج...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← العودة للخلف
        </button>
        <div className="error-message">
          <h2>المنتج غير موجود</h2>
          <p>عذراً، لم يتم العثور على المنتج المطلوب (ID: {id}).</p>
          <button onClick={() => navigate("/")}>العودة إلى المتجر</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="back-button-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          العودة للخلف ←
        </button>
      </div>

      <div className="product-detail">
        <div className="product-gallery">
          <div className="main-image">
            <img
              src={product.img}
              alt={product.name}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x400/ecf0f1/34495e?text=صورة+غير+متوفرة";
              }}
            />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-meta">
            {product.brand && <span className="brand">{product.brand}</span>}
            {product.flavor && <span className="flavor">{product.flavor}</span>}
          </div>

          <div className="product-price">EGP {product.price}</div>

          {/* استخدام description بدلاً من description لأن هذا هو الاسم في بياناتك */}
          {product.description && (
            <div className="product-description">
              <p>{product.description}</p>
            </div>
          )}

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="add-to-cart" onClick={handleBuyNow}>
            Buy now
          </button>

          {product.video && (
            <div className="product-video">
              <h3>فيديو المنتج</h3>
              <video controls width="100%">
                <source src={product.video} type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
