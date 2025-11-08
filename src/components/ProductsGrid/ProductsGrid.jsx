

// src/components/ProductsGrid/ProductsGrid.jsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsGrid.css';

const ProductsGrid = ({ products }) => {
  // تجميع المنتجات حسب البراند
  const productsByBrand = products.reduce((acc, product) => {
    const brand = product.brand || 'Other';
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(product);
    return acc;
  }, {});

  return (
    <div className="products-grid">
      {Object.entries(productsByBrand).map(([brand, brandProducts]) => (
        <div key={brand} className="brand-section">
          {/* اسم البراند */}
          <div className="brand-banner">
            <h2 className="brand-title">{brand.toUpperCase()}</h2>
            <p className="brand-subtitle">Discover our exclusive {brand} products</p>
          </div>

          {/* بانر البراند */}
          <div className="brand-video">
            {/* <video src={brandProducts[0].video} alt={`${brand} banner`}  autoPlay loop /> */}
            <img src={brandProducts[0].BrandImg} alt={`${brand} banner`} />
          </div>
          
          {/* منتجات البراند */}
          <div className="brand-products">
            {brandProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;



// // src/components/ProductsGrid/ProductsGrid.jsx
// import React from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./ProductsGrid.css";

// const ProductsGrid = ({ products }) => {
//   // تجميع المنتجات حسب البراند
//   const productsByBrand = products.reduce((acc, product) => {
//     const brand = product.brand || "Other";
//     if (!acc[brand]) {
//       acc[brand] = [];
//     }
//     acc[brand].push(product);
//     return acc;
//   }, {});

//   return (
//     <div className="products-grid">
//       {Object.entries(productsByBrand).map(([brand, brandProducts]) => (
//         <div key={brand} className="brand-section">
//           {/* اسم البراند */}
//           <div className="brand-banner">
//             <h2 className="brand-title">{brand.toUpperCase()}</h2>
//             <p className="brand-subtitle">
//               Discover our exclusive {brand} products
//             </p>
//           </div>

//           {/* بانر البراند */}
//           <div className="brand-video">
//             <img src={brandProducts[0].BrandImg} alt={`${brand} banner`} />
//           </div>

//           {/* سلايدر المنتجات */}
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             spaceBetween={20}
//             slidesPerView={4}
//             loop
//             className="brand-products-swiper"
//           >
//             {brandProducts.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <ProductCard product={product} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsGrid;
