// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";
import facebookIcon from "../../../assets/social media icons/facebook_icon.svg";
import instagramIcon from "../../../assets/social media icons/instagram_icon.svg";
import tiktokIcon from "../../../assets/social media icons/tiktok_icon.svg";
import whatsappIcon from "../../../assets/social media icons/whatsapp_icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* Main Content */}
        <div className="policies-simple">
          <div className="policy-item">
            <span>سياسة الاستبدال والاسترجاع</span>
            <p>يمكنك إرجاع المنتجات خلال 30 يومًا من الاستلام.</p>
          </div>
          <div className="policy-item">
            <span>سياسة الشحن والتوصيل</span>
            <p>نقدم شحنًا مجانيًا للطلبات التي تزيد عن 500 جنيه.</p>
          </div>
          <div className="policy-item">
            <span>سياسة الخصوصية</span>
            <p>نحن نحترم خصوصيتك ونتعهد بحماية معلوماتك الشخصية.</p>
          </div>
          <div className="policy-item">
            <span>حقوق الملكية</span>
            <p>جميع الحقوق محفوظة لشركة VOZOLEGY.</p>
          </div>
        </div>
        <div className="footer-content">
          {/* Left Section - Brand Info */}
          <div className="footer-left">
            <div className="brand-info">
              <h3>VOZOLEGY</h3>
              <p>Premium Vape Products</p>
            </div>
            <div className="contact-simple">
              <p>📧 info@vozolegy.com</p>
              <p>📞 +20 123 456 789</p>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="footer-middle">
            {/* <div className="links-column">
              <h4>Shop</h4>
              <a href="/products">Products</a>
              <a href="/top-products">Top Products</a>
              <a href="#">New Arrivals</a>
            </div> */}
            {/* <div className="links-column">
              <h4>Support</h4>
              <a href="#">Contact</a>
              <a href="#">Shipping Info</a>
              <a href="#">Returns</a>
            </div> */}
            <div className="links-column">
              <h4>Contact Us</h4>
              <div className="social-col">
                <a
                className="socialFooter"
                href="https://www.instagram.com/vozol_egy?igsh=cWc5ZnU4aTJlN25v"
                target="_blank"
              >
                <img src={instagramIcon} alt="" />
                <p>vozol_egy</p>
              </a>
              <a
                className="socialFooter"
                href="https://www.facebook.com/share/17G6ZiBo2m/?mibextid=wwXIfr"
                target="_blank"
              >
                <img src={facebookIcon} alt="" />
                <p>Vozol Egy</p>
              </a>
              <a
                className="socialFooter"
                href="https://wa.me/201141341192?text=مرحباً، أريد الاستفسار عن المنتجات"
                target="_blank"
              >
                <img src={whatsappIcon} alt="" />
                <p>WhatsApp</p>
              </a>
              <a
                className="socialFooter "
                href="https://www.tiktok.com/@vozol.egy?_t=ZS-90SMD4tlqIZ&_r=1"
                target="_blank"
              >
                <img src={tiktokIcon} alt="" />
                <p>vozol.egy</p>
              </a>
              </div>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="footer-right">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest offers</p>
            <div className="newsletter-simple">
              <input
                type="email"
                placeholder="Your email"
                className="email-input"
              />
              <button className="subscribe-btn">→</button>
            </div>
          </div>
        </div>

        {/* Policies Section - Arabic */}

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 VOZOLEGY. All rights reserved.</p>
            <div className="social-simple">
              {/* <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">TW</a>
              <a href="#">WA</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
