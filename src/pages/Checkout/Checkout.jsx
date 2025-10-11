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
//     whatsapp: "",
//     governorate: "",
//     city: "",
//     address: "",
//   });
//   const [cities, setCities] = useState([]);
//   const [shippingCost, setShippingCost] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
    
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

//   // دالة إرسال الطلب للإيميل
//   const submitOrder = async (orderData) => {
//     try {
//       const response = await fetch('https://formsubmit.co/ajax/semsemaa127@gmail.com', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           // إعدادات FormSubmit
//           _subject: `🎉 طلب جديد - ${orderData.fullName}`,
//           _template: 'table',
//           _autoresponse: `مرحباً ${orderData.fullName}، تم استلام طلبك بنجاح! سنتصل بك خلال 24 ساعة.`,
          
//           // بيانات العميل
//           '👤 الاسم الكامل': orderData.fullName,
//           '📧 الإيميل': orderData.email,
//           '📞 رقم الهاتف': orderData.phone,
//           '💬 واتساب': orderData.whatsapp || 'نفس رقم الهاتف',
//           '🏙️ المحافظة': orderData.governorate,
//           '🏘️ المدينة': orderData.city,
//           '📍 العنوان التفصيلي': orderData.address,
          
//           // تفاصيل الطلب
//           '🛒 عدد المنتجات': orderData.items.length,
//           '📦 المنتجات': orderData.items.map(item => 
//             `${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه = ${item.price * item.quantity} جنيه`
//           ).join('\n'),
          
//           '💰 إجمالي المنتجات': `${orderData.subtotal} جنيه`,
//           '🚚 تكلفة الشحن': `${orderData.shippingCost} جنيه`,
//           '💵 الإجمالي النهائي': `${orderData.total} جنيه`,
          
//           // معلومات إضافية
//           '⏰ وقت الطلب': new Date().toLocaleString('ar-EG'),
//           '🆔 رقم الطلب': `VOZ-${Date.now()}`,
//           '🌐 المصدر': 'موقع VOZOL_EGY مصر'
//         })
//       });

//       if (response.ok) {
//         return { success: true, orderId: Date.now() };
//       } else {
//         return { success: false, error: 'فشل في إرسال الطلب' };
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       return { 
//         success: false, 
//         error: 'فشل في الاتصال. يرجى المحاولة مرة أخرى'
//       };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (items.length === 0) {
//       alert("عربة التسوق فارغة");
//       return;
//     }

//     // التحقق من البيانات المطلوبة
//     if (!formData.fullName || !formData.phone || !formData.address || !formData.governorate || !formData.city) {
//       alert("يرجى ملء جميع البيانات المطلوبة");
//       return;
//     }

//     setIsSubmitting(true);

//     // تجهيز بيانات الطلب
//     const orderData = {
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       whatsapp: formData.whatsapp,
//       governorate: formData.governorate,
//       city: formData.city,
//       address: formData.address,
//       items: items,
//       subtotal: getCartTotal(),
//       shippingCost: shippingCost,
//       total: getCartTotal() + shippingCost
//     };

//     // إرسال الطلب
//     const result = await submitOrder(orderData);
    
//     setIsSubmitting(false);

//     if (result.success) {
//       alert(`🎉 تم تأكيد طلبك بنجاح!
      
// الاسم: ${formData.fullName}
// رقم الطلب: VOZ-${result.orderId}
// المبلغ: ${orderData.total} جنيه

// سيتم الاتصال بك على ${formData.phone} خلال 24 ساعة لتأكيد التفاصيل.`);

//       clearCart();
//       navigate("/");
//     } else {
//       alert(`❌ حدث خطأ في إرسال الطلب
      
// ${result.error}

// يرجى الاتصال بنا مباشرة على:
// 📞 01203527773
// 💬 واتساب: 01203527773

// أو إرسال البيانات manually.`);
//     }
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
//                 <p>النوع: {item.flavor}</p>
//                 <p>الكمية: {item.quantity}</p>
//                 <p>السعر: {item.price * item.quantity} جنيه</p>
//               </div>
//             </div>
//           ))}

//           <div className="price-breakdown">
//             <div className="price-row">
//               <span>إجمالي المنتجات</span>
//               <span>{getCartTotal()} جنيه</span>
//             </div>
//             <div className="price-row">
//               <span>التوصيل</span>
//               <span>{shippingCost} جنيه</span>
//             </div>
//             <div className="price-row total">
//               <span>المجموع النهائي:</span>
//               <span>{total} جنيه</span>
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
//                 placeholder="أدخل اسمك بالكامل"
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
//                 placeholder="example@gmail.com"
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
//                 placeholder="01XXXXXXXXX"
//               />
//             </div>

//             <div className="form-group">
//               <label>رقم واتساب (اختياري)</label>
//               <input
//                 type="tel"
//                 name="whatsapp"
//                 value={formData.whatsapp}
//                 onChange={handleInputChange}
//                 placeholder="إذا كان مختلف عن رقم الهاتف"
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
//                     {gov.name} - توصيل {gov.shippingCost} جنيه
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
//                 placeholder="اسم الشارع، المنطقة، رقم العمارة، الشقة، أي معالم قريبة..."
//                 rows="3"
//               ></textarea>
//             </div>

//             <button 
//               type="submit" 
//               className="submit-order-btn"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'جاري إرسال الطلب...' : `تأكيد الطلب - ${total} جنيه`}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


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

  // دالة محسنة لإرسال الطلب للإيميل
  const submitOrder = async (orderData) => {
    try {
      // إعداد رقم الطلب
      const orderId = `VOZ-${Date.now()}`;
      
      // إعداد محتوى البريد الإلكتروني
      const emailContent = {
        // إعدادات FormSubmit
        _subject: `🎉 طلب جديد - ${orderData.fullName} - ${orderId}`,
        _template: 'table',
        _autoresponse: `مرحباً ${orderData.fullName}، تم استلام طلبك بنجاح! سنتصل بك خلال 24 ساعة.`,
        _cc: "semsemaa127@gmail.com", // إضافة CC للتأكد من وصول الرسالة
        
        // بيانات العميل
        '👤 الاسم الكامل': orderData.fullName,
        '📧 الإيميل': orderData.email,
        '📞 رقم الهاتف': orderData.phone,
        '💬 واتساب': orderData.whatsapp || orderData.phone,
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
        '🆔 رقم الطلب': orderId,
        '🌐 المصدر': 'موقع VOZOL_EGY مصر - Vercel'
      };

      // المحاولة الأولى: FormSubmit API
      const formSubmitResponse = await fetch('https://formsubmit.co/ajax/semsemaa127@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent)
      });

      if (formSubmitResponse.ok) {
        return { success: true, orderId: orderId };
      } else {
        // المحاولة الثانية: EmailJS كبديل
        return await tryEmailJS(orderData, orderId);
      }
    } catch (error) {
      console.error('Error:', error);
      // المحاولة البديلة في حالة الفشل
      return await tryEmailJS(orderData, `VOZ-${Date.now()}`);
    }
  };

  // دالة بديلة لإرسال البريد باستخدام EmailJS
  const tryEmailJS = async (orderData, orderId) => {
    try {
      // استبدل هذه القيم بقيم EmailJS الخاصة بك
      const serviceID = 'YOUR_EMAILJS_SERVICE_ID';
      const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';
      const userID = 'YOUR_EMAILJS_USER_ID';
      
      const emailJSParams = {
        order_id: orderId,
        customer_name: orderData.fullName,
        customer_email: orderData.email,
        customer_phone: orderData.phone,
        customer_whatsapp: orderData.whatsapp || orderData.phone,
        governorate: orderData.governorate,
        city: orderData.city,
        address: orderData.address,
        items: orderData.items.map(item => 
          `${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه`
        ).join(' | '),
        subtotal: `${orderData.subtotal} جنيه`,
        shipping: `${orderData.shippingCost} جنيه`,
        total: `${orderData.total} جنيه`,
        order_date: new Date().toLocaleString('ar-EG')
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: emailJSParams
        })
      });

      if (response.ok) {
        return { success: true, orderId: orderId };
      } else {
        throw new Error('فشل إرسال البريد');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return { 
        success: false, 
        error: 'فشل في إرسال الطلب. يرجى الاتصال بنا مباشرة.' 
      };
    }
  };

  // دالة محسنة للتحقق من البيانات
  const validateForm = () => {
    if (items.length === 0) {
      return "عربة التسوق فارغة";
    }

    if (!formData.fullName.trim()) {
      return "يرجى إدخال الاسم الكامل";
    }

    if (!formData.email.trim()) {
      return "يرجى إدخال البريد الإلكتروني";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "يرجى إدخال بريد إلكتروني صحيح";
    }

    if (!formData.phone.trim()) {
      return "يرجى إدخال رقم الهاتف";
    } else if (!/^01[0125][0-9]{8}$/.test(formData.phone)) {
      return "يرجى إدخال رقم هاتف مصري صحيح (11 رقم)";
    }

    if (formData.whatsapp && !/^01[0125][0-9]{8}$/.test(formData.whatsapp)) {
      return "يرجى إدخال رقم واتساب مصري صحيح (11 رقم)";
    }

    if (!formData.governorate) {
      return "يرجى اختيار المحافظة";
    }

    if (!formData.city) {
      return "يرجى اختيار المدينة";
    }

    if (!formData.address.trim()) {
      return "يرجى إدخال العنوان التفصيلي";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // التحقق من البيانات
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setIsSubmitting(true);

    // تجهيز بيانات الطلب
    const orderData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
      governorate: formData.governorate,
      city: formData.city,
      address: formData.address.trim(),
      items: items,
      subtotal: getCartTotal(),
      shippingCost: shippingCost,
      total: getCartTotal() + shippingCost
    };

    // إرسال الطلب
    const result = await submitOrder(orderData);
    
    setIsSubmitting(false);

    if (result.success) {
      // رسالة نجاح محسنة
      const successMessage = `🎉 تم تأكيد طلبك بنجاح!

الاسم: ${formData.fullName}
رقم الطلب: ${result.orderId}
المبلغ: ${orderData.total} جنيه

سيتم الاتصال بك على ${formData.phone} خلال 24 ساعة لتأكيد التفاصيل.

شكراً لاختيارك متجر VOZOL_EGY مصر!`;

      alert(successMessage);

      // حفظ بيانات الطلب محلياً كنسخة احتياطية
      const backupOrder = {
        ...orderData,
        orderId: result.orderId,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(`order_${result.orderId}`, JSON.stringify(backupOrder));

      clearCart();
      navigate("/");
    } else {
      // رسالة خطأ محسنة مع خيارات بديلة
      const errorMessage = `❌ حدث خطأ في إرسال الطلب

${result.error}

يرجى الاتصال بنا مباشرة على:
📞 01203527773
💬 واتساب: 01203527773

أو إرسال البيانات التالية يدوياً:

الاسم: ${formData.fullName}
الهاتف: ${formData.phone}
العنوان: ${formData.governorate} - ${formData.city}
${formData.address}

إجمالي الطلب: ${orderData.total} جنيه`;

      alert(errorMessage);
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
          {items.length === 0 ? (
            <p className="empty-cart">عربة التسوق فارغة</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={`${item.id}-${item.flavor}`} className="checkout-item">
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
            </>
          )}
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
                pattern="01[0125][0-9]{8}"
                placeholder="01XXXXXXXXX"
                title="يرجى إدخال رقم هاتف مصري صحيح (11 رقم)"
              />
            </div>

            <div className="form-group">
              <label>رقم واتساب (اختياري)</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                pattern="01[0125][0-9]{8}"
                placeholder="إذا كان مختلف عن رقم الهاتف"
                title="يرجى إدخال رقم واتساب مصري صحيح (11 رقم)"
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
              disabled={isSubmitting || items.length === 0}
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