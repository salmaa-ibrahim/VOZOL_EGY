// src/components/About/AboutSection.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutSection.css";
import AboutImg from "../../../public/assets/AboutImages/aboutImg2.webp";
// import video1 from "../../../public/assets/videos/video1.mp4";
// import video2 from "../../../public/assets/videos/video2.mp4";
import AboutImg3 from "../../../public/assets/AboutImages/Screenshot 2025-11-06 123341.png";
import AboutImg2 from "../../../public/assets/AboutImages/aboutImg2.webp";
import instagramIcon from "../../../public/assets/social media icons/instagram_icon.svg";
import whatsappIcon from "../../../public/assets/social media icons/whatsapp_icon.svg";
import facebookIcon from "../../../public/assets/social media icons/facebook_icon.svg";
import PhoneCall from "../../../public/assets/social media icons/phone-call.svg";
import About from "../../../public/assets/AboutImages/Option.jpeg";

import { useState, useEffect } from "react";

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // قائمة الصور
  const images = [
    "/assets/Ads/Attention.png",
    // "/assets/Ads/Attention.jpeg",
    "/assets/Ads/AD.jpeg",
  ];

  // تأثير التبديل التلقائي كل 10 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 10 ثواني = 10000 ميلي ثانية

    // تنظيف المؤقت عند إلغاء التثبيت
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-section" id="about">
      <div className="snow-effect"></div>
      <div className="about-ad">
        <img
          className="about-ad-image"
          src={images[currentImageIndex]}
          alt={`Ad ${currentImageIndex + 1}`}
        />
       
         
        
      </div>
      <div className="about-content">
        <div className="features">
          <h3>Why Choose VOZOLEGY?</h3>
          <div className="features-grid">
            <div className="feature">
              <img className="payment" src={About} alt="" />
            </div>

            <div className="feature new">
              <div className="info">
                <a
                  className=" contact"
                  href="https://wa.me/201505337422?text=مرحباً، أريد الاستفسار عن المنتجات"
                  target="_blank"
                >
                  <img src={whatsappIcon} alt="" />
                  <p>WhatsApp</p>
                </a>
                <a className=" contact" href="tel:201505337422" target="_blank">
                  <img src={PhoneCall} alt="" />
                  <p>Phone Call</p>
                </a>
                <a
                  className=" contact"
                  href="https://www.instagram.com/vozol_egy?igsh=cWc5ZnU4aTJlN25v"
                  target="_blank"
                >
                  <img src={instagramIcon} alt="" />
                  <p>vozol_egy</p>
                </a>
                <a
                  className="contact"
                  href="https://www.facebook.com/share/17G6ZiBo2m/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <img src={facebookIcon} alt="" />
                  <p>Vozol Egy</p>
                </a>
              </div>
            </div>
            {/* <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h4>Technical Support</h4>
              <p>
                Technical support team available to help you choose the right
                product
              </p>
            </div> */}
          </div>
        </div>

        <div className="about-item">
          <div className="about-text">
            <h3>Our Products</h3>
            <p>
              We offer a wide range of Vape products suitable for all tastes and
              levels:
            </p>

            <ul className="products-list">
             <li>
                <NavLink
                  to="/Vozol Shisha 40000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol ShiSha 40000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Gear 50000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol Gear 50000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AIVONO Zero Necotine 20000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ AIVONO Zero Necotine 20000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Coki Zero Necotine 16000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Cokii Zero Necotine 16000
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Star 40000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol Star 40000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Vista 40000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol vista 40000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Rave 40000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol Rave 40000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vtouch Smart Vape 30000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vtouch Smart Vape 30000
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Gear Shisha 25000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol Gear Shisha 25000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Star 20000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol Star 20000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Gear 20000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  ★ Vozol Gear 20000 puffs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
