// export default Checkout;
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import egyptGovernorates from "../../data/egyptGovernorates";
import "./Checkout.css";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    governorate: "",
    city: "",
    address: "",
  });

  const [cities, setCities] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // عند اختيار محافظة
    if (name === "governorate") {
      const selectedGovernorate = egyptGovernorates.find(
        (g) => g.name === value
      );
      if (selectedGovernorate) {
        setCities(selectedGovernorate.cities);
        setShippingCost(selectedGovernorate.shippingCost);
        setFormData((prev) => ({ ...prev, city: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("عربة التسوق فارغة");
      return;
    }

    // هنا يمكنك إضافة منطق إرسال الطلب
    alert("تم إتمام الطلب بنجاح!");
    clearCart();
    navigate("/");
  };

  const total = getCartTotal() + shippingCost;

  return (
    <div className="checkout-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← العودة إلى المتجر
      </button>

      <h1>إتمام الشراء</h1>

      <div className="checkout-container">
        <div className="order-summary">
          <h2>ملخص الطلب</h2>
          {items.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.img} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>Flavor: {item.flavor}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price * item.quantity} EGY</p>
              </div>
            </div>
          ))}

          <div className="price-breakdown">
            <div className="price-row">
              <span>Product Total</span>
              <span>{getCartTotal()} EGY</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <span>{shippingCost} EGY</span>
            </div>
            <div className="price-row total">
              <span>Total:</span>
              <span>{total} EGY</span>
            </div>
          </div>
        </div>

        <div className="checkout-form">
          <h2>معلومات الشحن</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>الاسم بالكامل *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>البريد الإلكتروني *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>رقم الهاتف *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>رقم واتساب</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>المحافظة *</label>
              <select
                name="governorate"
                value={formData.governorate}
                onChange={handleInputChange}
                required
              >
                <option value="">اختر المحافظة</option>
                {egyptGovernorates.map((gov) => (
                  <option key={gov.id} value={gov.name}>
                    {gov.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>المدينة *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                disabled={!formData.governorate}
              >
                <option value="">اختر المدينة</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>العنوان التفصيلي *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="اسم الشارع، المنطقة، رقم العمارة..."
              ></textarea>
            </div>

            <button type="submit" className="submit-order-btn">
              تأكيد الطلب - {total} جنيه
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
