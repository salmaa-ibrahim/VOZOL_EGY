// src/pages/ProductsPage/ProductsPage.jsx
import React from 'react';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import SearchBar from '../../components/SearchBar/SearchBar';
import './ProductsPage.css';

const ProductsPage = ({ products, onSearch, searchQuery, title }) => {
  return (
    <div className="products-page" id="products">
      <div className="container">
        <div className="products-page-header">
          <h1>{title}</h1>
          
          <div className="search-section">
            <SearchBar 
              onSearch={onSearch}
              placeholder={`Search in ${title.toLowerCase()}...`}
            />
            {searchQuery && (
              <p className="search-results-count">
                Found {products.length} products for "{searchQuery}"
              </p>
            )}
          </div>
        </div>
        
        <ProductsGrid products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;