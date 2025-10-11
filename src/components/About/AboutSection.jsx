// src/components/About/AboutSection.jsx
import React from "react";
import "./AboutSection.css";
// import img2 from "../../../assets/AboutImages/aboutImg2.webp";
import video1 from "../../../assets/videos/video1.mp4";
import video2 from "../../../assets/videos/video2.mp4";
import OptimizedVideo from '../OptimizedVideo';
const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div>
        {/* <div className="about-header">
          <h2>About VOZOLEGY Store</h2>
          <p>Your premier destination for the best Vape products in Egypt</p>
        </div> */}

        <div className="about-content">
          <div className="features">
            <h3>Why Choose VOZOL?</h3>
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
                  All our products are original and high quality with
                  manufacturer warranty
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
            {/* <div className="about-text">
              <h3>Our Story</h3>
              <p>
                VOZOL is not just an ordinary Vape products store, but a unique
                experience we offer to enthusiasts of distinctive flavors and
                modern design. We started our journey in 2020 with the goal of
                providing high-quality products at competitive prices and
                exceptional customer service.
              </p>
            </div>
            <div className="about-image">
              <img src={img2} alt="Vozo Story" />
            </div> */}
          </div>

          <div className="about-item reverse">
            {/* <div className="about-text">
              <h3>Our Vision</h3>
              <p>
                We aspire to be the first destination for Vape enthusiasts in
                the Arab world, by offering the latest global products and
                finest e-liquids, while maintaining the highest standards of
                quality and safety.
              </p>
            </div> */}
            <div className="about-image">
              {/* <img 
                src="https://via.placeholder.com/400x300/e74c3c/ffffff?text=Vozo+Vision" 
                alt="Vozo Vision" 
              /> */}
              <OptimizedVideo
                src={video1}
                type="video/mp4"
                muted={true}
                loop={true}
                autoPlay={true}
                width="700"
              ></OptimizedVideo>
            </div>
          </div>

          <div className="about-item">
            <div className="about-text">
              <h3>Our Products</h3>
              <p>
                We offer a wide range of Vape products suitable for all tastes
                and levels:
              </p>
              <ul className="products-list">
                <li>🔄 Beginner and advanced Vape devices</li>
                <li>💨 E-liquids with various flavors</li>
                <li>🔋 Batteries and accessories</li>
                <li>🎯 Care and maintenance products</li>
              </ul>
            </div>
            <div className="about-image">
              {/* <img 
                src="https://via.placeholder.com/400x300/9b59b6/ffffff?text=Vozo+Products" 
                alt="Vozo Products" 
              /> */}
              <video
                src={video2}
                type="video/mp4"
                muted
                loop
                autoPlay
                width="700"
                style={{ marginTop: "50px" }}
              ></video>
            </div>
          </div>
        </div>

        {/* <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>0123456789</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>info@vozol-egypt.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <span>Customer service available daily from 10 AM to 10 PM</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
