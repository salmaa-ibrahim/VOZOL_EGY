// import React from "react";
// import "./TopProducts.css";
// import ProductCard from "../ProductCard/ProductCard";

// export default function TopProducts({ items }) {
//   return (
//     <section id="top-products" className="top-products">
//       <div className="brand-banner">
//             <h2 className="brand-title">Top Sellers</h2>
//             <p className="brand-subtitle"> Discover our best-selling products, loved by customers for their quality
//         and performance.</p>
//       </div>
      

//       <div className="top-list">
//         {items.map((p, i) => (
//           <ProductCard key={p.id} product={{ ...p, rank: i + 1 }} />
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import "./TopProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import topOne from "/assets/products/Vozol Gear 50000 puffs/1 (11).jpg"
import topTwo from "/assets/products/Coki Zero Necotine/5.jpg"
import topThree from "/assets/products/Vtouch Smart Vape 30000 puffs/8.jpg"
import topFour from "/assets/products/Vozol Gear Shisha 25000 puffs/17.jpg"
import topFive from "/assets/products/Vozol Star 40000 puffs/5.jpg"

export default function TopProducts() {
  // مصفوفة المنتجات الأكثر طلبًا (ممكن تضيفي أو تعدلي المنتجات هنا)
  const topProducts = [
 {
       id: 1,
       name: "Vozol Gear 50000 puffs",
       flavor: "suber mint",
       price: 999,
       img: topOne,
       brand: "Vozol Gear 50000 puffs",
       description: "none",
       puffs: "50000",
       inStock: true,
     },
     {
       id: 2,
       name: "Coki Zero Necotine 16000 puffs",
       flavor: "Watermelon ice",
       price: 950,
       img: topTwo,
       brand: "Coki Zero Necotine 16000 puffs",
       description: "none",
       puffs: "50000",
       inStock: true,
     },
     {
       id: 3,
       name: "Vtouch Smart Vape 30000 puffs",
       flavor: "guava melon ice",
       price: 850,
       img: topThree,
       brand: "Vtouch Smart Vape 30000 puffs",
       description: "none",
       puffs: "50000",
       inStock: true,
     },
     {
       id: 4,
       name: "Vozol Gear Shisha 25000 puffs",
       flavor: "Mango peach",
       price: 880,
       img: topFour,
       brand: "Vozol Gear Shisha 25000 puffs",
       description: "none",
       puffs: "50000",
       inStock: true,
     },
     {
       id: 5,
       name: "Vozol Star 40000 puffs",
       flavor: "Cherry cola",
       price: 900,
       img: topFive,
       brand: "Vozol Star 40000 puffs",
       description: "none",
       puffs: "50000",
       inStock: true,
     }
  ];

  return (
    <section id="top-products" className="top-products">
      <div className="brand-banner">
        <h2 className="brand-title">Top Sellers</h2>
        <p className="brand-subtitle">
          Discover our best-selling products, loved by customers for their
          quality and performance.
        </p>
      </div>

      <div className="top-list">
        {topProducts.map((p, i) => (
          <ProductCard key={p.id} product={{ ...p, rank: i + 1 }} />
        ))}
      </div>
    </section>
  );
}
