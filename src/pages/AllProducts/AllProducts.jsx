// // src/components/AllProducts/AllProducts.jsx
// import './AllProducts.css';
// import { useNavigate , Link } from "react-router-dom";


// const AllProducts = () => {
//   const navigate = useNavigate();
//   const All = () => {
//     navigate("/products");
//   };
//     return (
//       <>
//       show results
//       </>
//     );
//   };

 
// src/components/AllProducts/AllProducts.jsx
import React, { useState, useEffect } from 'react';
import './AllProducts.css';

// استيراد البيانات مباشرة (بدون async)
import productsData from '../../data/products';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [selectedDeviceType, setSelectedDeviceType] = useState('All');
  const [selectedPuffs, setSelectedPuffs] = useState('2000-6000');
  const [selectedTechnology, setSelectedTechnology] = useState('Core Technology');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // تحميل البيانات
  useEffect(() => {
    console.log('Products data:', productsData);
    console.log('Type:', typeof productsData);
    console.log('Is array?', Array.isArray(productsData));
    
    if (Array.isArray(productsData)) {
      setProducts(productsData);
    } else {
      console.error('Products data is not an array:', productsData);
      // إذا لم تكن مصفوفة، حاول تحويلها
      if (productsData && typeof productsData === 'object') {
        // إذا كان object فيه خاصية products
        if (productsData.products && Array.isArray(productsData.products)) {
          setProducts(productsData.products);
        } else {
          // حاول تحويل object إلى array
          const productsArray = Object.values(productsData).filter(item => 
            item && typeof item === 'object'
          );
          if (productsArray.length > 0) {
            setProducts(productsArray);
          } else {
            setProducts([]);
          }
        }
      } else {
        setProducts([]);
      }
    }
    setLoading(false);
  }, []);

  // دالة مساعدة لاستخراج القيم الفريدة بشكل آمن
  const getUniqueValues = (key) => {
    if (!Array.isArray(products) || products.length === 0) return [];
    const values = products.map(product => product?.[key]).filter(Boolean);
    return [...new Set(values)];
  };

  // استخراج القيم الفريدة من البيانات
  const categories = ['all', ...getUniqueValues('category')];
  const deviceTypes = ['All', ...getUniqueValues('deviceType')];
  const puffsOptions = ['2000-6000', ...getUniqueValues('puffs')];
  const technologies = ['Core Technology', ...getUniqueValues('technology')];

  // تصفية المنتجات بناءً على الاختيارات
  const filteredProducts = Array.isArray(products) ? products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesDeviceType = selectedDeviceType === 'All' || product.deviceType === selectedDeviceType;
    const matchesPuffs = selectedPuffs === '2000-6000' || product.puffs === selectedPuffs;
    const matchesTechnology = selectedTechnology === 'Core Technology' || product.technology === selectedTechnology;
    
    return matchesCategory && matchesDeviceType && matchesPuffs && matchesTechnology;
  }) : [];

  const handleFindIt = () => {
    setShowResults(true);
  };

  const handleResetFilters = () => {
    setSelectedDeviceType('All');
    setSelectedPuffs('2000-6000');
    setSelectedTechnology('Core Technology');
    setSelectedCategory('all');
    setShowResults(false);
  };

  // حالة التحميل
  if (loading) {
    return (
      <div className="all-products-container">
        <div className="loading-state">Loading products...</div>
      </div>
    );
  }

  // حالة عدم وجود منتجات
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="all-products-container">
        <div className="error-state">
          No products available
          <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
            Check the browser console for more details
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="all-products-container">
      {/* الهيدر */}
      <header className="products-header">
        <h1>VOZOL</h1>
        <nav className="breadcrumb">
          HOME &gt; Products
        </nav>
      </header>

      {!showResults ? (
        /* صفحة الفلاتر */
        <div className="filters-page">
          <div className="filters-section">
            <h2>Find it!</h2>
            <div className="filters-grid">
              <div className="filter-group">
                <label>Device Type</label>
                <select 
                  value={selectedDeviceType}
                  onChange={(e) => setSelectedDeviceType(e.target.value)}
                >
                  {deviceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Number of puffs</label>
                <select 
                  value={selectedPuffs}
                  onChange={(e) => setSelectedPuffs(e.target.value)}
                >
                  {puffsOptions.map(puff => (
                    <option key={puff} value={puff}>{puff}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Core Technology</label>
                <select 
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="find-it-btn" onClick={handleFindIt}>
              Find it!
            </button>
          </div>

          {/* الأقسام */}
          <div className="categories-section">
            <div className="categories-grid">
              {categories.filter(cat => cat !== 'all').map(category => (
                <div
                  key={category}
                  className={`category-card ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <h3>{category} series</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* صفحة النتائج */
        <div className="results-page">
          {/* الفلاتر النشطة */}
          <div className="active-filters">
            <div className="filter-tags">
              <span className="filter-tag">{selectedDeviceType}</span>
              <span className="filter-tag">{selectedPuffs}</span>
              <span className="filter-tag">{selectedTechnology}</span>
            </div>
          </div>

          {/* عنوان النتائج */}
          <div className="results-header">
            <h2>Find it!</h2>
            <div className="results-count">{filteredProducts.length} results</div>
          </div>

          {/* قائمة المنتجات */}
          <div className="products-results">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="image-placeholder">{product.name}</div>
                  )}
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-specs">
                    <span className="puffs">{product.puffs} Puffs</span>
                    <span className="flavors">{product.flavors} flavors...</span>
                  </div>
                  
                  <p className="product-description">
                    {product.description}
                  </p>
                  
                  <div className="product-actions">
                    <button className="more-details-btn">
                      (More details+)
                    </button>
                    <button className="learn-more-btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* زر الرجوع */}
          <div className="back-section">
            <button className="back-btn" onClick={handleResetFilters}>
              ← Back to Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;