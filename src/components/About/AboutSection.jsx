// src/components/About/AboutSection.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutSection.css";
import AboutImg from "../../../public/assets/AboutImages/aboutImg2.webp";
// import video1 from "../../../public/assets/videos/video1.mp4";
// import video2 from "../../../public/assets/videos/video2.mp4";
import AboutImg3 from "../../../public/assets/AboutImages/Screenshot 2025-11-06 123341.png";
import AboutImg2 from "../../../public/assets/AboutImages/aboutImg2.webp";
const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      {/* <div className="about-header">
          <h2>About VOZOLEGY Store</h2>
          <p>Your premier destination for the best Vape products in Egypt</p>
        </div> */}
      {/* <div className="about-header">
          <h2> ツ اطلب مننا و انبساطك عندنا</h2>
        </div> */}
      <div className="about-content">
        <div className="features">
          <h3>Why Choose VOZOLEGY?</h3>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">💳</div>
              <h4>Secure Payment</h4>
              <p>
                Secure and multiple payment systems suitable for all customers
              </p>
              <div className="payment">
                <img
                  src="../../../assets/social media icons/OIP.webp"
                  alt="Visa"
                />
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h4>Free & Fast Shipping</h4>
              <p>
                Delivery to all Egyptian governorates within 2-3 working days
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">✅</div>
              <h4>Original Products</h4>
              <p>
                All our products are original and high quality with manufacturer
                warranty
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h4>Technical Support</h4>
              <p>
                Technical support team available to help you choose the right
                product
              </p>
            </div>
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
                  to="/Vozol Star 40000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol Star 40000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Rave 20000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol Rave 20000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Gear Shisha 25000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol Gear Shisha 25000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Star 20000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol Star 20000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Gear 20000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol Gear 20000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vtouch Smart Vape 30000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vtouch Smart Vape 30000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol Gear 50000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol Gear 50000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Vozol vista 40000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Vozol vista 40000 puffs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Cokii Zero Necotine 16000 puffs"
                  className={({ isActive }) =>
                    isActive ? "product-link active" : "product-link"
                  }
                >
                  Cokii Zero Necotine 16000 puffs
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
