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
// import AllProducts from "./pages/AllProducts/AllProducts";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import WhatsAppFab from "./components/WhatsAppFab/WhatsAppFab";
import WhatsAppPopup from "./components/WhatsAppPopup/WhatsAppPopup";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./contexts/CartContext";
import data from "./data/products";
import SEO from "./components/SEO";
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
    <>
      <SEO
        title="VOZOLEGY - أفضل موقع لبيع منتجات ال vape في مصر"
        description="اشتري أجهزة Vape أصلية . توصيل سريع و مجاني لكل محافظات مصر. أسعار مناسبة "
        keywords=" سيجارة الكترونية مصر, فيب, vape مصر, زيرو نيكوتين,vozol , vozol egypt , zero nicotine , dispossible vape , اجهزة vape"
      />
      <CartProvider>
        <ScrollToTop />
        <div className="App">
          {showAgeGate && <AgeGate onAccept={handleAgeAccepted} />}
          {showAd && <AdPopup onClose={() => setShowAd(false)} />}

          <Header />
          <FreeShipping />

          <Routes>
            <Route
              path="/"
              element={
                <main className="container">
                  <Slider items={data.banners} />
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
                  <TopProducts items={data.TopProducts.slice(0, 6)} />
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

            <Route
              path="/Vozol Star 40000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Star 40000 puffs"
                    )}
                    brand="Vozol Star 40000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Vozol Rave 40000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Rave 40000 puffs"
                    )}
                    brand="Vozol Rave 40000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Vozol Gear Shisha 25000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) =>
                        product.brand === "Vozol Gear Shisha 25000 puffs"
                    )}
                    brand="Vozol Gear Shisha 25000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Vozol Star 20000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Star 20000 puffs"
                    )}
                    brand="Vozol Star 20000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Vozol Rave 40000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Rave 40000 puffs"
                    )}
                    brand="Vozol Rave 40000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Coki Zero Necotine 16000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) =>
                        product.brand === "Coki Zero Necotine 16000 puffs"
                    )}
                    brand="Coki Zero Necotine 16000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Vozol Gear 20000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Gear 20000 puffs"
                    )}
                    brand="Vozol Gear 20000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Vtouch Smart Vape 30000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) =>
                        product.brand === "Vtouch Smart Vape 30000 puffs"
                    )}
                    brand="Vtouch Smart Vape 30000 puffs"
                  />
                </main>
              }
            />
            <Route
              path="/Vozol Gear 50000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Gear 50000 puffs"
                    )}
                    brand="Vozol Gear 50000 puffs"
                  />
                </main>
              }
            />
            <Route
              path="/AIVINI Zero Necotine 20000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "AIVINI Zero Necotine 20000 puffs"
                    )}
                    brand="AIVINI Zero Necotine 20000 puffs"
                  />
                </main>
              }
            />
            

            <Route
              path="/Vozol Vista 40000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) => product.brand === "Vozol Vista 40000 puffs"
                    )}
                    brand="Vozol Vista 40000 puffs"
                  />
                </main>
              }
            />

            <Route
              path="/Cokii Zero Necotine 16000 puffs"
              element={
                <main className="container">
                  <ProductsGrid
                    products={data.products.filter(
                      (product) =>
                        product.brand === "Cokii Zero Necotine 16000 puffs"
                    )}
                    brand="Cokii Zero Necotine 16000 puffs"
                  />
                </main>
              }
            />

            <Route
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
            {/* <Route path="/products" element={<AllProducts />} /> */}
          </Routes>
          <Footer />
          <WhatsAppFab />
          <WhatsAppPopup
            phoneNumber="201141341192" // استبدل برقمك
            message="محتار في اختيارك؟ محتاج مساعده؟ 
                 فريق الدعم متاح 24 ساعة على واتساب"
          />
        </div>
      </CartProvider>
    </>
  );
}
