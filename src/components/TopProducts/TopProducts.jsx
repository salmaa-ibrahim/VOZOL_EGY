import React from "react";
import "./TopProducts.css";
import ProductCard from "../ProductCard/ProductCard";

export default function TopProducts({items}) {


  return (
    <section id="top-products" className="top-products">
      <div className="brand-banner">
            <h2 className="brand-title">Top Sellers</h2>
            <p className="brand-subtitle"> Discover our best-selling products, loved by customers for their quality
        and performance.</p>
      </div>
      

      <div className="top-list">
        {items.map((p, i) => (
          <ProductCard key={p.id} product={{ ...p, rank: i + 1 }} />
        ))}
      </div>
    </section>
  );
}









// import React from "react";
// import "./TopProducts.css";
// import ProductCard from "../ProductCard/ProductCard";

// export default function TopProducts({ items }) {
//   // Filter products that are marked as top
//   const topItems = items.filter((p) => p.isTop === true);

//   return (
//     <section id="top-products" className="top-products">
//       <div className="brand-banner">
//         <h2 className="brand-title">Top Sellers</h2>
//         <p className="brand-subtitle">
//           Discover our best-selling products, loved by customers for their quality
//           and performance.
//         </p>
//       </div>

//       <div className="top-list">
//         {topItems.map((p, i) => (
//           <ProductCard key={p.id} product={{ ...p, rank: i + 1 }} />
//         ))}
//       </div>
//     </section>
//   );
// }



