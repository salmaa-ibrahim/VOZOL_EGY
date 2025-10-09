// import './App.css'

// function App() {

//   return (
//     <>
//     hello bbb
//     </>
//   )
// }

// export default App
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AgeGate from "./components/AgeGate/AgeGate";
import AdPopup from "./components/AdPopup/AdPopup";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import TopProducts from "./components/TopProducts/TopProducts";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import AboutSection from "./components/About/AboutSection"; // إضافة الاستيراد
import FreeShipping from "./components/FreeShipping/FreeShipping";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import WhatsAppFab from "./components/WhatsAppFab/WhatsAppFab";
import { CartProvider } from "./contexts/CartContext";
import data from "./data/products";
import "./styles/layout.css";
export default function App() {
  const [showAgeGate, setShowAgeGate] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  useEffect(() => {
    const seen = localStorage.getItem("vozo_age_verified");
    if (!seen) {
      setShowAgeGate(true);
    } else {
      setTimeout(() => setShowAd(true), 700);
    }
  }, []);

  const handleAgeAccepted = () => {
    localStorage.setItem("vozo_age_verified", "1");
    setShowAgeGate(false);
    setTimeout(() => setShowAd(true), 500);
  };
  // تصفية المنتجات بناءً على البحث
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(data.products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = data.products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.flavor.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <CartProvider>
      <div className="App">
        {showAgeGate && <AgeGate onAccept={handleAgeAccepted} />}
        {showAd && <AdPopup onClose={() => setShowAd(false)} />}

        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <main className="container">
                <Slider items={data.banners} />
                <FreeShipping />
                {/* شريط البحث */}
                <div className="search-section">
                  <SearchBar
                    onSearch={handleSearch}
                    placeholder="Search for vape products, flavors, brands..."
                  />
                  {searchQuery && (
                    <p className="search-results-count">
                      Found {filteredProducts.length} products for "
                      {searchQuery}"
                    </p>
                  )}
                </div>
                <AboutSection />

                {/* <PromoBanner text="Vozolag - Premium flavors. Modern design. Fast shipping." />
                <PromoBanner text="FREE SHIPPING" /> */}
                <TopProducts items={data.products.slice(0, 5)} />
                <ProductsGrid products={data.products} />

                {/* إضافة قسم About هنا */}
              </main>
            }
          />

          <Route
            path="/top-products"
            element={
              <main className="container">
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>
                  Top Products
                </h1>
                <TopProducts
                  items={data.products.filter((p) => p.rank && p.rank <= 5)}
                />
              </main>
            }
          />
\          <Route
            path="/products"
            element={
              <main className="container">
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>
                  All Products
                </h1>
                <ProductsGrid products={data.products} brand="Brand One" />
                <ProductsGrid products={data.products} brand="Brand Two" />
              </main>
            }
          />

          <Route
            path="/products/:id"
            element={<ProductDetails products={data.products} />}
          />

          <Route path="/about" element={<AboutSection />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <WhatsAppFab />
      </div>
    </CartProvider>
  );
}
