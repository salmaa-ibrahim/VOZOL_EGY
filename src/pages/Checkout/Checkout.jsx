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

//   // دالة محسنة لإرسال الطلب للإيميل
//   const submitOrder = async (orderData) => {
//     try {
//       // إعداد رقم الطلب
//       const orderId = `VOZ-${Date.now()}`;
      
//       // إعداد محتوى البريد الإلكتروني
//       const emailContent = {
//         // إعدادات FormSubmit
//         _subject: `🎉 طلب جديد - ${orderData.fullName} - ${orderId}`,
//         _template: 'table',
//         _autoresponse: `مرحباً ${orderData.fullName}، تم استلام طلبك بنجاح! سنتصل بك خلال 24 ساعة.`,
//         _cc: "semsemaa127@gmail.com",
//  // إضافة CC للتأكد من وصول الرسالة
        
//         // بيانات العميل
//         '👤 الاسم الكامل': orderData.fullName,
//         '📧 الإيميل': orderData.email,
//         '📞 رقم الهاتف': orderData.phone,
//         '💬 واتساب': orderData.whatsapp || orderData.phone,
//         '🏙️ المحافظة': orderData.governorate,
//         '🏘️ المدينة': orderData.city,
//         '📍 العنوان التفصيلي': orderData.address,
        
//         // تفاصيل الطلب
//         '🛒 عدد المنتجات': orderData.items.length,
//         '📦 المنتجات': orderData.items.map(item => 
//           `${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه = ${item.price * item.quantity} جنيه`
//         ).join('\n'),
        
//         '💰 إجمالي المنتجات': `${orderData.subtotal} جنيه`,
//         '🚚 تكلفة الشحن': `${orderData.shippingCost} جنيه`,
//         '💵 الإجمالي النهائي': `${orderData.total} جنيه`,
        
//         // معلومات إضافية
//         '⏰ وقت الطلب': new Date().toLocaleString('ar-EG'),
//         '🆔 رقم الطلب': orderId,
//         '🌐 المصدر': 'موقع VOZOL_EGY مصر - Vercel'
//       };

//       // المحاولة الأولى: FormSubmit API
//       const formSubmitResponse = await fetch('https://formsubmit.co/ajax/semsemaa127@gmail.com', {
//         // const formSubmitResponse = await fetch('https://formsubmit.co/e3e483805619fb9dace776e21c799b40', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(emailContent)
//       });
//       const backupResponse = await fetch('https://formsubmit.co/ajax/saidelshazli27@gmail.com', {
//       // const backupResponse = await fetch('https://formsubmit.co/el/confirm/e47a9b9d73c47ff96639fd1f71699947', { // اللينك بتاع الإيميل التاني
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(emailContent)
//   });

//       if (formSubmitResponse.ok || backupResponse.ok) {
//         return { success: true, orderId: orderId };
//       } else {
//         // المحاولة الثانية: EmailJS كبديل
//         return await tryEmailJS(orderData, orderId);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // المحاولة البديلة في حالة الفشل
//       return await tryEmailJS(orderData, `VOZ-${Date.now()}`);
//     }
//   };

//   // دالة بديلة لإرسال البريد باستخدام EmailJS
//   const tryEmailJS = async (orderData, orderId) => {
//     try {
//       // استبدل هذه القيم بقيم EmailJS الخاصة بك
//       const serviceID = 'YOUR_EMAILJS_SERVICE_ID';
//       const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';
//       const userID = 'YOUR_EMAILJS_USER_ID';
      
//       const emailJSParams = {
//         order_id: orderId,
//         customer_name: orderData.fullName,
//         customer_email: orderData.email,
//         customer_phone: orderData.phone,
//         customer_whatsapp: orderData.whatsapp || orderData.phone,
//         governorate: orderData.governorate,
//         city: orderData.city,
//         address: orderData.address,
//         items: orderData.items.map(item => 
//           `${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه`
//         ).join(' | '),
//         subtotal: `${orderData.subtotal} جنيه`,
//         shipping: `${orderData.shippingCost} جنيه`,
//         total: `${orderData.total} جنيه`,
//         order_date: new Date().toLocaleString('ar-EG')
//       };

//       const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: serviceID,
//           template_id: templateID,
//           user_id: userID,
//           template_params: emailJSParams
//         })
//       });

//       if (response.ok) {
//         return { success: true, orderId: orderId };
//       } else {
//         throw new Error('فشل إرسال البريد');
//       }
//     } catch (error) {
//       console.error('EmailJS Error:', error);
//       return { 
//         success: false, 
//         error: 'فشل في إرسال الطلب. يرجى الاتصال بنا مباشرة.' 
//       };
//     }
//   };

//   // دالة محسنة للتحقق من البيانات
//   const validateForm = () => {
//     if (items.length === 0) {
//       return "عربة التسوق فارغة";
//     }

//     if (!formData.fullName.trim()) {
//       return "يرجى إدخال الاسم الكامل";
//     }

//     if (!formData.email.trim()) {
//       return "يرجى إدخال البريد الإلكتروني";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       return "يرجى إدخال بريد إلكتروني صحيح";
//     }

//     if (!formData.phone.trim()) {
//       return "يرجى إدخال رقم الهاتف";
//     } else if (!/^01[0125][0-9]{8}$/.test(formData.phone)) {
//       return "يرجى إدخال رقم هاتف مصري صحيح (11 رقم)";
//     }

//     if (formData.whatsapp && !/^01[0125][0-9]{8}$/.test(formData.whatsapp)) {
//       return "يرجى إدخال رقم واتساب مصري صحيح (11 رقم)";
//     }

//     if (!formData.governorate) {
//       return "يرجى اختيار المحافظة";
//     }

//     if (!formData.city) {
//       return "يرجى اختيار المدينة";
//     }

//     if (!formData.address.trim()) {
//       return "يرجى إدخال العنوان التفصيلي";
//     }

//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // التحقق من البيانات
//     const validationError = validateForm();
//     if (validationError) {
//       alert(validationError);
//       return;
//     }

//     setIsSubmitting(true);

//     // تجهيز بيانات الطلب
//     const orderData = {
//       fullName: formData.fullName.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
//       governorate: formData.governorate,
//       city: formData.city,
//       address: formData.address.trim(),
//       items: items,
//       subtotal: getCartTotal(),
//       shippingCost: shippingCost,
//       total: getCartTotal() + shippingCost
//     };

//     // إرسال الطلب
//     const result = await submitOrder(orderData);
    
//     setIsSubmitting(false);

//     if (result.success) {
//       // رسالة نجاح محسنة
//       const successMessage = `🎉 تم تأكيد طلبك بنجاح!

// الاسم: ${formData.fullName}
// رقم الطلب: ${result.orderId}
// المبلغ: ${orderData.total} جنيه

// سيتم الاتصال بك على ${formData.phone} خلال 24 ساعة لتأكيد التفاصيل.

// شكراً لاختيارك متجر VOZOL_EGY مصر!`;

//       alert(successMessage);

//       // حفظ بيانات الطلب محلياً كنسخة احتياطية
//       const backupOrder = {
//         ...orderData,
//         orderId: result.orderId,
//         timestamp: new Date().toISOString()
//       };
//       localStorage.setItem(`order_${result.orderId}`, JSON.stringify(backupOrder));

//       clearCart();
//       navigate("/");
//     } else {
//       // رسالة خطأ محسنة مع خيارات بديلة
//       const errorMessage = `❌ حدث خطأ في إرسال الطلب

// ${result.error}

// يرجى الاتصال بنا مباشرة على:
// 📞 01203527773
// 💬 واتساب: 01203527773

// أو إرسال البيانات التالية يدوياً:

// الاسم: ${formData.fullName}
// الهاتف: ${formData.phone}
// العنوان: ${formData.governorate} - ${formData.city}
// ${formData.address}

// إجمالي الطلب: ${orderData.total} جنيه`;

//       alert(errorMessage);
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
//           {items.length === 0 ? (
//             <p className="empty-cart">عربة التسوق فارغة</p>
//           ) : (
//             <>
//               {items.map((item) => (
//                 <div key={`${item.id}-${item.flavor}`} className="checkout-item">
//                   <img src={item.img} alt={item.name} />
//                   <div className="item-info">
//                     <h4>{item.name}</h4>
//                     <p>النوع: {item.flavor}</p>
//                     <p>الكمية: {item.quantity}</p>
//                     <p>السعر: {item.price * item.quantity} جنيه</p>
//                   </div>
//                 </div>
//               ))}

//               <div className="price-breakdown">
//                 <div className="price-row">
//                   <span>إجمالي المنتجات</span>
//                   <span>{getCartTotal()} جنيه</span>
//                 </div>
//                 <div className="price-row">
//                   <span>التوصيل</span>
//                   <span>{shippingCost} جنيه</span>
//                 </div>
//                 <div className="price-row total">
//                   <span>المجموع النهائي:</span>
//                   <span>{total} جنيه</span>
//                 </div>
//               </div>
//             </>
//           )}
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
//                 pattern="01[0125][0-9]{8}"
//                 placeholder="01XXXXXXXXX"
//                 title="يرجى إدخال رقم هاتف مصري صحيح (11 رقم)"
//               />
//             </div>

//             <div className="form-group">
//               <label>رقم واتساب (اختياري)</label>
//               <input
//                 type="tel"
//                 name="whatsapp"
//                 value={formData.whatsapp}
//                 onChange={handleInputChange}
//                 pattern="01[0125][0-9]{8}"
//                 placeholder="إذا كان مختلف عن رقم الهاتف"
//                 title="يرجى إدخال رقم واتساب مصري صحيح (11 رقم)"
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
//               disabled={isSubmitting || items.length === 0}
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
 



// ----------------------الواتساب ----------------------

// import React, { useState } from "react";
// import { useCart } from "../../contexts/CartContext";
// import { useNavigate } from "react-router-dom";
// import egyptGovernorates from "../../data/egyptGovernorates";
// import "./Checkout.css";

// const Checkout = () => {
//   const { items, getCartTotal, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "", email: "", phone: "", whatsapp: "", governorate: "", city: "", address: "",
//   });
//   const [cities, setCities] = useState([]);
//   const [shippingCost, setShippingCost] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "governorate") {
//       const selectedGovernorate = egyptGovernorates.find((g) => g.name === value);
//       if (selectedGovernorate) {
//         setCities(selectedGovernorate.cities);
//         setShippingCost(selectedGovernorate.shippingCost);
//         setFormData((prev) => ({ ...prev, city: "" }));
//       }
//     }
//   };

//   // الطريقة المبسطة - واتساب + حفظ محلي
//   const submitOrderSimple = async (orderData, orderId) => {
//     try {
//       // 1. حفظ الطلب محلياً
//       const orders = JSON.parse(localStorage.getItem('store_orders') || '[]');
//       orders.push({
//         id: orderId, ...orderData, 
//         timestamp: new Date().toISOString(), 
//         status: 'جديد'
//       });
//       localStorage.setItem('store_orders', JSON.stringify(orders));

//       // 2. إنشاء رسالة واتساب
//       const message = `🎉 *طلب جديد* 🎉
      
// 📋 *الطلب:* ${orderId}
// 👤 *الاسم:* ${orderData.fullName}
// 📞 *الهاتف:* ${orderData.phone}
// 📍 *العنوان:* ${orderData.governorate} - ${orderData.city}
// ${orderData.address}

// 🛒 *المنتجات:*
// ${orderData.items.map(item => 
//   `• ${item.name} (${item.flavor}) - ${item.quantity} × ${item.price} جنيه`
// ).join('\n')}

// 💰 *الإجمالي:* ${orderData.total} جنيه
// ⏰ *التاريخ:* ${new Date().toLocaleString('ar-EG')}`;

//       // 3. فتح واتساب
//       const encodedMessage = encodeURIComponent(message);
//       const whatsappUrl = `https://wa.me/201203527773?text=${encodedMessage}`;
//       window.open(whatsappUrl, '_blank');

//       return { success: true, orderId };

//     } catch (error) {
//       console.error('خطأ:', error);
//       return { success: false, error: 'فشل في حفظ الطلب' };
//     }
//   };

//   const validateForm = () => {
//     if (items.length === 0) return "عربة التسوق فارغة";
//     if (!formData.fullName.trim()) return "يرجى إدخال الاسم الكامل";
//     if (!formData.email.trim()) return "يرجى إدخال البريد الإلكتروني";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) return "يرجى إدخال بريد إلكتروني صحيح";
//     if (!formData.phone.trim()) return "يرجى إدخال رقم الهاتف";
//     else if (!/^01[0125][0-9]{8}$/.test(formData.phone)) return "يرجى إدخال رقم هاتف مصري صحيح (11 رقم)";
//     if (formData.whatsapp && !/^01[0125][0-9]{8}$/.test(formData.whatsapp))
//       return "يرجى إدخال رقم واتساب مصري صحيح (11 رقم)";
//     if (!formData.governorate) return "يرجى اختيار المحافظة";
//     if (!formData.city) return "يرجى اختيار المدينة";
//     if (!formData.address.trim()) return "يرجى إدخال العنوان التفصيلي";
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationError = validateForm();
//     if (validationError) {
//       alert(validationError);
//       return;
//     }

//     setIsSubmitting(true);

//     const orderId = `VOZ-${Date.now()}`;
//     const orderData = {
//       fullName: formData.fullName.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
//       governorate: formData.governorate,
//       city: formData.city,
//       address: formData.address.trim(),
//       items,
//       subtotal: getCartTotal(),
//       shippingCost,
//       total: getCartTotal() + shippingCost,
//     };

//     const result = await submitOrderSimple(orderData, orderId);
//     setIsSubmitting(false);

//     if (result.success) {
//       alert(`🎉 تم تأكيد طلبك بنجاح!\n\n📋 رقم الطلب: ${result.orderId}\n💰 المبلغ: ${orderData.total} جنيه\n\n📱 تم فتح واتساب، يرجى إرسال الرسالة تلقائياً.`);
//       clearCart();
//       navigate("/");
//     } else {
//       alert(`❌ حدث خطأ\n${result.error}`);
//     }
//   };

//   const total = getCartTotal() + shippingCost;

//   return (
//     <div className="checkout-page">
//       <button className="back-btn" onClick={() => navigate("/")}>← العودة</button>
//       <h1>إتمام الشراء</h1>

//       <div className="checkout-container">
//         <div className="order-summary">
//           <h2>ملخص الطلب</h2>
//           {items.length === 0 ? <p className="empty-cart">عربة التسوق فارغة</p> : (
//             <>
//               {items.map((item) => (
//                 <div key={`${item.id}-${item.flavor}`} className="checkout-item">
//                   <img src={item.img} alt={item.name} />
//                   <div className="item-info">
//                     <h4>{item.name}</h4>
//                     <p>النوع: {item.flavor}</p>
//                     <p>الكمية: {item.quantity}</p>
//                     <p>السعر: {item.price * item.quantity} جنيه</p>
//                   </div>
//                 </div>
//               ))}
//               <div className="price-breakdown">
//                 <div className="price-row"><span>إجمالي المنتجات</span><span>{getCartTotal()} جنيه</span></div>
//                 <div className="price-row"><span>التوصيل</span><span>{shippingCost} جنيه</span></div>
//                 <div className="price-row total"><span>المجموع النهائي:</span><span>{total} جنيه</span></div>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="checkout-form">
//           <h2>معلومات الشحن</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group"><label>الاسم بالكامل *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="أدخل اسمك بالكامل" /></div>
//             <div className="form-group"><label>البريد الإلكتروني *</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="example@gmail.com" /></div>
//             <div className="form-group"><label>رقم الهاتف *</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required pattern="01[0125][0-9]{8}" placeholder="01XXXXXXXXX" /></div>
//             <div className="form-group"><label>رقم واتساب (اختياري)</label><input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} pattern="01[0125][0-9]{8}" placeholder="إذا كان مختلف عن رقم الهاتف" /></div>
//             <div className="form-group"><label>المحافظة *</label>
//               <select name="governorate" value={formData.governorate} onChange={handleInputChange} required>
//                 <option value="">اختر المحافظة</option>
//                 {egyptGovernorates.map((gov) => <option key={gov.id} value={gov.name}>{gov.name} - توصيل {gov.shippingCost} جنيه</option>)}
//               </select>
//             </div>
//             <div className="form-group"><label>المدينة *</label>
//               <select name="city" value={formData.city} onChange={handleInputChange} required disabled={!formData.governorate}>
//                 <option value="">اختر المدينة</option>
//                 {cities.map((city) => <option key={city} value={city}>{city}</option>)}
//               </select>
//             </div>
//             <div className="form-group"><label>العنوان التفصيلي *</label><textarea name="address" value={formData.address} onChange={handleInputChange} required placeholder="اسم الشارع، المنطقة، رقم العمارة، الشقة، أي معالم قريبة..." rows="3"></textarea></div>
//             <button type="submit" className="submit-order-btn" disabled={isSubmitting || items.length === 0}>
//               {isSubmitting ? "جاري إرسال الطلب..." : `تأكيد الطلب - ${total} جنيه`}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;













// import React, { useState, useEffect } from "react";
// import { useCart } from "../../contexts/CartContext";
// import { useNavigate } from "react-router-dom";
// import egyptGovernorates from "../../data/egyptGovernorates";
// import emailjs from '@emailjs/browser'; // ✅ إضافة EmailJS
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

//   // تهيئة EmailJS
//   useEffect(() => {
//     emailjs.init("pPsyMMraTScRqoUN2"); // استبدل بمفتاحك
//   }, []);

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

//   // دالة الإرسال باستخدام EmailJS
//   const submitOrder = async (orderData) => {
//     const orderId = `VOZ-${Date.now()}`;
    
//     try {
//       // إعداد بيانات القالب
//       const templateParams = {
//         email: orderData.email, // هذا المتغير الذي سيرسل إلى الـ Template
//         order_id: orderId,
//         customer_name: orderData.fullName,
//         customer_email: orderData.email,
//         customer_phone: orderData.phone,
//         customer_whatsapp: orderData.whatsapp || orderData.phone,
//         governorate: orderData.governorate,
//         city: orderData.city,
//         address: orderData.address,
//         items: orderData.items.map(item => 
//           `• ${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه = ${item.price * item.quantity} جنيه`
//         ).join('\n'),
//         subtotal: `${orderData.subtotal} جنيه`,
//         shipping_cost: `${orderData.shippingCost} جنيه`,
//         total_amount: `${orderData.total} جنيه`,
//         order_date: new Date().toLocaleString('ar-EG'),
//         item_count: orderData.items.length.toString()
//       };

//       // إرسال البريد باستخدام EmailJS
//       const result = await emailjs.send(
//         'service_unhcikk',    // استبدل بـ Service ID
//         'template_e3g2zwk',   // استبدل بـ Template ID
//         templateParams,
//         'pPsyMMraTScRqoUN2'     // استبدل بـ Public Key
//       );

//       console.log('✅ Email sent successfully:', result);
//       return { success: true, orderId: orderId };

//     } catch (error) {
//       console.error('❌ EmailJS error:', error);
      
//       // بديل: حفظ محلي + إشعار واتساب
//       try {
//         await saveOrderLocally(orderData, orderId);
//         return { success: true, orderId: orderId, local: true };
//       } catch (localError) {
//         return { 
//           success: false, 
//           error: 'فشل في إرسال الطلب. يرجى الاتصال بنا مباشرة على: 01505337422' 
//         };
//       }
//     }
//   };

//   // دالة حفظ الطلب محلياً
//   const saveOrderLocally = async (orderData, orderId) => {
//     const orderToSave = {
//       ...orderData,
//       orderId: orderId,
//       timestamp: new Date().toISOString(),
//       status: 'pending'
//     };
    
//     localStorage.setItem(`order_${orderId}`, JSON.stringify(orderToSave));
    
//     const allOrders = JSON.parse(localStorage.getItem('vozol_orders') || '[]');
//     allOrders.push(orderToSave);
//     localStorage.setItem('vozol_orders', JSON.stringify(allOrders));
    
//     return true;
//   };

//   // دالة إشعار واتساب (اختيارية)
//   const sendWhatsAppNotification = (orderData, orderId) => {
//     const message = `🛒 طلب جديد 🛒
    
// الاسم: ${orderData.fullName}
// الهاتف: ${orderData.phone}
// المحافظة: ${orderData.governorate}
// المدينة: ${orderData.city}
// الإجمالي: ${orderData.total} جنيه
// رقم الطلب: ${orderId}

// المنتجات:
// ${orderData.items.map(item => 
//   `- ${item.name} (${item.flavor}) × ${item.quantity}`
// ).join('\n')}`;

//     const whatsappUrl = `https://wa.me/201505337422?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   // دالة للتحقق من البيانات
//   const validateForm = () => {
//     if (items.length === 0) return "عربة التسوق فارغة";
//     if (!formData.fullName.trim()) return "يرجى إدخال الاسم الكامل";
//     if (!formData.email.trim()) return "يرجى إدخال البريد الإلكتروني";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return "يرجى إدخال بريد إلكتروني صحيح";
//     if (!formData.phone.trim()) return "يرجى إدخال رقم الهاتف";
//     if (!/^01[0125][0-9]{8}$/.test(formData.phone)) return "يرجى إدخال رقم هاتف مصري صحيح";
//     if (formData.whatsapp && !/^01[0125][0-9]{8}$/.test(formData.whatsapp)) return "يرجى إدخال رقم واتساب صحيح";
//     if (!formData.governorate) return "يرجى اختيار المحافظة";
//     if (!formData.city) return "يرجى اختيار المدينة";
//     if (!formData.address.trim()) return "يرجى إدخال العنوان التفصيلي";
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const validationError = validateForm();
//     if (validationError) {
//       alert(validationError);
//       return;
//     }

//     setIsSubmitting(true);

//     // تجهيز بيانات الطلب
//     const orderData = {
//       fullName: formData.fullName.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
//       governorate: formData.governorate,
//       city: formData.city,
//       address: formData.address.trim(),
//       items: items.map(item => ({
//         id: item.id,
//         name: item.name,
//         flavor: item.flavor,
//         quantity: item.quantity,
//         price: item.price,
//         img: item.img
//       })),
//       subtotal: getCartTotal(),
//       shippingCost: shippingCost,
//       total: getCartTotal() + shippingCost
//     };

//     // إرسال الطلب
//     const result = await submitOrder(orderData);
    
//     setIsSubmitting(false);

//     if (result.success) {
//       let successMessage = `🎉 تم تأكيد طلبك بنجاح!

// الاسم: ${formData.fullName}
// رقم الطلب: ${result.orderId}
// المبلغ: ${orderData.total} جنيه
// `;

//       if (result.local) {
//         successMessage += "\n📱 تم حفظ الطلب وسيتم التواصل معك قريباً.";
//         // إشعار واتساب تلقائي
//         sendWhatsAppNotification(orderData, result.orderId);
//       } else {
//         successMessage += "\n✅ تم إرسال تأكيد الطلب إلى بريدك الإلكتروني.";
//       }

//       successMessage += "\n\nشكراً لاختيارك متجر VOZOL_EGY مصر!";

//       alert(successMessage);

//       // تنظيف البيانات
//       clearCart();
//       setFormData({
//         fullName: "", email: "", phone: "", whatsapp: "",
//         governorate: "", city: "", address: "",
//       });
      
//       navigate("/");
//     } else {
//       const errorMessage = `❌ حدث خطأ في إرسال الطلب

// ${result.error}

// يرجى الاتصال بنا مباشرة:
// 📞 01505337422
// 💬 واتساب: 01505337422`;

//       alert(errorMessage);
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
//           {items.length === 0 ? (
//             <p className="empty-cart">عربة التسوق فارغة</p>
//           ) : (
//             <>
//               {items.map((item) => (
//                 <div key={`${item.id}-${item.flavor}`} className="checkout-item">
//                   <img src={item.img} alt={item.name} />
//                   <div className="item-info">
//                     <h4>{item.name}</h4>
//                     <p>النوع: {item.flavor}</p>
//                     <p>الكمية: {item.quantity}</p>
//                     <p>السعر: {item.price * item.quantity} جنيه</p>
//                   </div>
//                 </div>
//               ))}

//               <div className="price-breakdown">
//                 <div className="price-row">
//                   <span>إجمالي المنتجات</span>
//                   <span>{getCartTotal()} جنيه</span>
//                 </div>
//                 <div className="price-row">
//                   <span>التوصيل</span>
//                   <span>{shippingCost} جنيه</span>
//                 </div>
//                 <div className="price-row total">
//                   <span>المجموع النهائي:</span>
//                   <span>{total} جنيه</span>
//                 </div>
//               </div>
//             </>
//           )}
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
//                 pattern="01[0125][0-9]{8}"
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
//                 pattern="01[0125][0-9]{8}"
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
//                 placeholder="اسم الشارع، المنطقة، رقم العمارة، الشقة..."
//                 rows="3"
//               ></textarea>
//             </div>

//             <button 
//               type="submit" 
//               className="submit-order-btn"
//               disabled={isSubmitting || items.length === 0}
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






import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import egyptGovernorates from "../../data/egyptGovernorates";
import emailjs from '@emailjs/browser';
import "./Checkout.css";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "", // جعلنا الإيميل اختياري
    phone: "",
    whatsapp: "",
    governorate: "",
    city: "",
    address: "",
  });
  const [cities, setCities] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // تهيئة EmailJS
  useEffect(() => {
    emailjs.init("pPsyMMraTScRqoUN2");
  }, []);

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

  // دالة الإرسال باستخدام EmailJS
  const submitOrder = async (orderData) => {
    const orderId = `VOZ-${Date.now()}`;
    
    try {
      // تنسيق المنتجات بشكل منظم للبريد الإلكتروني
      const formattedItems = orderData.items.map(item => 
        `• ${item.name} (${item.flavor}) - ${item.quantity} قطعة × ${item.price} جنيه = ${item.price * item.quantity} جنيه`
      ).join('<br>');

      // إعداد بيانات القالب - إرسال للمدير فقط
      const templateParams = {
        order_id: orderId,
        customer_name: orderData.fullName,
        customer_phone: orderData.phone,
        customer_whatsapp: orderData.whatsapp || orderData.phone,
        governorate: orderData.governorate,
        city: orderData.city,
        address: orderData.address,
        items: formattedItems, // ✅ الآن سيظهر بشكل منظم
        subtotal: `${orderData.subtotal} جنيه`,
        shipping_cost: `${orderData.shippingCost} جنيه`,
        total_amount: `${orderData.total} جنيه`,
        order_date: new Date().toLocaleString('ar-EG'),
        item_count: orderData.items.length.toString()
      };

      // إرسال البريد باستخدام EmailJS
      const result = await emailjs.send(
        'service_unhcikk',
        'template_e3g2zwk',
        templateParams,
        'pPsyMMraTScRqoUN2'
      );

      console.log('✅ Email sent successfully:', result);
      return { success: true, orderId: orderId };

    } catch (error) {
      console.error('❌ EmailJS error:', error);
      
      // بديل: حفظ محلي + إشعار واتساب
      try {
        await saveOrderLocally(orderData, orderId);
        // إشعار واتساب تلقائي عند الفشل
        sendWhatsAppNotification(orderData, orderId);
        return { success: true, orderId: orderId, local: true };
      } catch (localError) {
        return { 
          success: false, 
          error: 'فشل في إرسال الطلب. يرجى الاتصال بنا مباشرة على: 01505337422' 
        };
      }
    }
  };

  // دالة حفظ الطلب محلياً
  const saveOrderLocally = async (orderData, orderId) => {
    const orderToSave = {
      ...orderData,
      orderId: orderId,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    localStorage.setItem(`order_${orderId}`, JSON.stringify(orderToSave));
    
    const allOrders = JSON.parse(localStorage.getItem('vozol_orders') || '[]');
    allOrders.push(orderToSave);
    localStorage.setItem('vozol_orders', JSON.stringify(allOrders));
    
    return true;
  };

  // دالة إشعار واتساب
  const sendWhatsAppNotification = (orderData, orderId) => {
    const message = `🛒 طلب جديد 🛒
    
الاسم: ${orderData.fullName}
الهاتف: ${orderData.phone}
المحافظة: ${orderData.governorate}
المدينة: ${orderData.city}
الإجمالي: ${orderData.total} جنيه
رقم الطلب: ${orderId}

المنتجات:
${orderData.items.map(item => 
  `- ${item.name} (${item.flavor}) × ${item.quantity}`
).join('\n')}`;

    const whatsappUrl = `https://wa.me/201505337422?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // دالة للتحقق من البيانات - إزالة التحقق من الإيميل
  const validateForm = () => {
    if (items.length === 0) return "عربة التسوق فارغة";
    if (!formData.fullName.trim()) return "يرجى إدخال الاسم الكامل";
    // إزالة التحقق من الإيميل الإلزامي
    if (!formData.phone.trim()) return "يرجى إدخال رقم الهاتف";
    if (!/^01[0125][0-9]{8}$/.test(formData.phone)) return "يرجى إدخال رقم هاتف مصري صحيح";
    if (formData.whatsapp && !/^01[0125][0-9]{8}$/.test(formData.whatsapp)) return "يرجى إدخال رقم واتساب صحيح";
    if (!formData.governorate) return "يرجى اختيار المحافظة";
    if (!formData.city) return "يرجى اختيار المدينة";
    if (!formData.address.trim()) return "يرجى إدخال العنوان التفصيلي";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setIsSubmitting(true);

    // تجهيز بيانات الطلب
    const orderData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(), // يبقى اختياري
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
      governorate: formData.governorate,
      city: formData.city,
      address: formData.address.trim(),
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        flavor: item.flavor,
        quantity: item.quantity,
        price: item.price,
        img: item.img
      })),
      subtotal: getCartTotal(),
      shippingCost: shippingCost,
      total: getCartTotal() + shippingCost
    };

    // إرسال الطلب
    const result = await submitOrder(orderData);
    
    setIsSubmitting(false);

    if (result.success) {
      let successMessage = `🎉 تم تأكيد طلبك بنجاح!

الاسم: ${formData.fullName}
رقم الطلب: ${result.orderId}
المبلغ: ${orderData.total} جنيه
`;

      if (result.local) {
        successMessage += "\n📱 تم حفظ الطلب وسيتم التواصل معك قريباً.";
      } else {
        successMessage += "\n✅ تم استلام طلبك بنجاح وسنتصل بك خلال 24 ساعة.";
      }

      successMessage += "\n\nشكراً لاختيارك متجر VOZOL_EGY مصر!";

      alert(successMessage);

      // تنظيف البيانات
      clearCart();
      setFormData({
        fullName: "", email: "", phone: "", whatsapp: "",
        governorate: "", city: "", address: "",
      });
      
      navigate("/");
    } else {
      const errorMessage = `❌ حدث خطأ في إرسال الطلب

${result.error}

يرجى الاتصال بنا مباشرة:
📞 01505337422
💬 واتساب: 01505337422

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

            {/* جعل حقل الإيميل اختياري */}
            <div className="form-group">
              <label>البريد الإلكتروني (اختياري)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="لإرسال تفاصيل الطلب لبريدك (اختياري)"
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
                placeholder="اسم الشارع، المنطقة، رقم العمارة، الشقة..."
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