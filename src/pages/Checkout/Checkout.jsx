// // export default Checkout;
// import React, { useState } from "react";
// import { useCart } from "../../contexts/CartContext";
// import { useNavigate } from "react-router-dom";
// import egyptGovernorates from "../../data/egyptGovernorates";
// import "./Checkout.css";
// const Checkout = () => {
//   const { items, getCartTotal, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     governorate: "",
//     city: "",
//     address: "",
//   });
//   const [cities, setCities] = useState([]);
//   const [shippingCost, setShippingCost] = useState(0);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // عند اختيار محافظة
//     if (name === "governorate") {
//       const selectedGovernorate = egyptGovernorates.find(
//         (g) => g.name === value
//       );
//       if (selectedGovernorate) {
//         setCities(selectedGovernorate.cities);
//         setShippingCost(selectedGovernorate.shippingCost);
//         setFormData((prev) => ({ ...prev, city: "" }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (items.length === 0) {
//       alert("عربة التسوق فارغة");
//       return;
//     }

//     // هنا يمكنك إضافة منطق إرسال الطلب
//     alert("تم إتمام الطلب بنجاح!");
//     clearCart();
//     navigate("/");
//   };

//   const total = getCartTotal() + shippingCost;

//   return (
//     <div className="checkout-page">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         ← العودة إلى المتجر
//       </button>

//       <h1>إتمام الشراء</h1>

//       <div className="checkout-container">
//         <div className="order-summary">
//           <h2>ملخص الطلب</h2>
//           {items.map((item) => (
//             <div key={item.id} className="checkout-item">
//               <img src={item.img} alt={item.name} />
//               <div className="item-info">
//                 <h4>{item.name}</h4>
//                 <p>Flavor: {item.flavor}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: {item.price * item.quantity} EGY</p>
//               </div>
//             </div>
//           ))}

//           <div className="price-breakdown">
//             <div className="price-row">
//               <span>Product Total</span>
//               <span>{getCartTotal()} EGY</span>
//             </div>
//             <div className="price-row">
//               <span>Shipping</span>
//               <span>{shippingCost} EGY</span>
//             </div>
//             <div className="price-row total">
//               <span>Total:</span>
//               <span>{total} EGY</span>
//             </div>
//           </div>
//         </div>

//         <div className="checkout-form">
//           <h2>معلومات الشحن</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>الاسم بالكامل *</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>البريد الإلكتروني *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>رقم الهاتف *</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>رقم واتساب</label>
//               <input
//                 type="tel"
//                 name="whatsapp"
//                 value={formData.whatsapp}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>المحافظة *</label>
//               <select
//                 name="governorate"
//                 value={formData.governorate}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">اختر المحافظة</option>
//                 {egyptGovernorates.map((gov) => (
//                   <option key={gov.id} value={gov.name}>
//                     {gov.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>المدينة *</label>
//               <select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 disabled={!formData.governorate}
//               >
//                 <option value="">اختر المدينة</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>العنوان التفصيلي *</label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="اسم الشارع، المنطقة، رقم العمارة..."
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-order-btn">
//               تأكيد الطلب - {total} جنيه
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

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
    whatsapp: "",
    governorate: "",
    city: "",
    address: "",
  });
  const [cities, setCities] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
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

  // دالة إرسال الطلب للإيميل
  const submitOrder = async (orderData) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/semsemaa127@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // إعدادات FormSubmit
          _subject: `🎉 طلب جديد - ${orderData.fullName}`,
          _template: 'table',
          _autoresponse: `مرحباً ${orderData.fullName}، تم استلام طلبك بنجاح! سنتصل بك خلال 24 ساعة.`,
          
          // بيانات العميل
          '👤 الاسم الكامل': orderData.fullName,
          '📧 الإيميل': orderData.email,
          '📞 رقم الهاتف': orderData.phone,
          '💬 واتساب': orderData.whatsapp || 'نفس رقم الهاتف',
          '🏙️ المحافظة': orderData.governorate,
          '🏘️ المدينة': orderData.city,
          '📍 العنوان التفصيلي': orderData.address,
          
          // تفاصيل الطلب
          '🛒 عدد المنتجات': orderData.items.length,
          '📦 المنتجات': orderData.items.map(item => 
            `${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه = ${item.price * item.quantity} جنيه`
          ).join('\n'),
          
          '💰 إجمالي المنتجات': `${orderData.subtotal} جنيه`,
          '🚚 تكلفة الشحن': `${orderData.shippingCost} جنيه`,
          '💵 الإجمالي النهائي': `${orderData.total} جنيه`,
          
          // معلومات إضافية
          '⏰ وقت الطلب': new Date().toLocaleString('ar-EG'),
          '🆔 رقم الطلب': `VOZ-${Date.now()}`,
          '🌐 المصدر': 'موقع VOZOL_EGY مصر'
        })
      });

      if (response.ok) {
        return { success: true, orderId: Date.now() };
      } else {
        return { success: false, error: 'فشل في إرسال الطلب' };
      }
    } catch (error) {
      console.error('Error:', error);
      return { 
        success: false, 
        error: 'فشل في الاتصال. يرجى المحاولة مرة أخرى'
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (items.length === 0) {
      alert("عربة التسوق فارغة");
      return;
    }

    // التحقق من البيانات المطلوبة
    if (!formData.fullName || !formData.phone || !formData.address || !formData.governorate || !formData.city) {
      alert("يرجى ملء جميع البيانات المطلوبة");
      return;
    }

    setIsSubmitting(true);

    // تجهيز بيانات الطلب
    const orderData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      governorate: formData.governorate,
      city: formData.city,
      address: formData.address,
      items: items,
      subtotal: getCartTotal(),
      shippingCost: shippingCost,
      total: getCartTotal() + shippingCost
    };

    // إرسال الطلب
    const result = await submitOrder(orderData);
    
    setIsSubmitting(false);

    if (result.success) {
      alert(`🎉 تم تأكيد طلبك بنجاح!
      
الاسم: ${formData.fullName}
رقم الطلب: VOZ-${result.orderId}
المبلغ: ${orderData.total} جنيه

سيتم الاتصال بك على ${formData.phone} خلال 24 ساعة لتأكيد التفاصيل.`);

      clearCart();
      navigate("/");
    } else {
      alert(`❌ حدث خطأ في إرسال الطلب
      
${result.error}

يرجى الاتصال بنا مباشرة على:
📞 01203527773
💬 واتساب: 01203527773

أو إرسال البيانات manually.`);
    }
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
                <p>النوع: {item.flavor}</p>
                <p>الكمية: {item.quantity}</p>
                <p>السعر: {item.price * item.quantity} جنيه</p>
              </div>
            </div>
          ))}

          <div className="price-breakdown">
            <div className="price-row">
              <span>إجمالي المنتجات</span>
              <span>{getCartTotal()} جنيه</span>
            </div>
            <div className="price-row">
              <span>التوصيل</span>
              <span>{shippingCost} جنيه</span>
            </div>
            <div className="price-row total">
              <span>المجموع النهائي:</span>
              <span>{total} جنيه</span>
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
                placeholder="أدخل اسمك بالكامل"
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
                placeholder="example@gmail.com"
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
                placeholder="01XXXXXXXXX"
              />
            </div>

            <div className="form-group">
              <label>رقم واتساب (اختياري)</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="إذا كان مختلف عن رقم الهاتف"
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
                    {gov.name} - توصيل {gov.shippingCost} جنيه
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
                placeholder="اسم الشارع، المنطقة، رقم العمارة، الشقة، أي معالم قريبة..."
                rows="3"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-order-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري إرسال الطلب...' : `تأكيد الطلب - ${total} جنيه`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;