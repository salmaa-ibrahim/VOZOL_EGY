// import React from 'react'
// import './ProductsGrid.css'
// import ProductCard from '../ProductCard/ProductCard'

// export default function ProductsGrid({ products }){
//   return (
//     <section id="products" className="products-grid">
//       <h3>All Products</h3>
//       <div className="brand-banner">Featured Brand</div>
//       <div className="grid">
//         {products.map(p=> <ProductCard key={p.id} product={p} />)}
//       </div>

//       {/* <div className="brand-banner">Featured Brand two</div> */}
//     {/* <div className="grid">
//         {products.map(p=> <ProductCard key={p.brand} product={p} />)}
//       </div> */}
//     </section>
//   )
// }



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