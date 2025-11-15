// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import products from '../../data/products';
// import './SearchBar.css';
// import SearchIcon from '../../../public/assets/Icons/search-icon.svg'; // تأكد من مسار الأيقونة

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasSearched, setHasSearched] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setSearchResults([]);
//       setIsOpen(false);
//       setHasSearched(false);
//       return;
//     }

//     // التحقق من وجود البيانات أولاً
//     if (!products || !products.products) {
//       console.error('Products data is not available');
//       return;
//     }

//     setHasSearched(true);

//     const results = products.products.filter(product => {
//       // التحقق من وجود كل خاصية قبل استخدام toLowerCase
//       const name = product.name ? product.name.toLowerCase() : '';
//       const flavor = product.flavor ? product.flavor.toLowerCase() : '';
//       const brand = product.brand ? product.brand.toLowerCase() : '';
//       const description = product.description ? product.description.toLowerCase() : '';
      
//       const searchLower = searchTerm.toLowerCase();
      
//       return name.includes(searchLower) ||
//              flavor.includes(searchLower) ||
//              brand.includes(searchLower) ||
//              description.includes(searchLower);
//     });

//     setSearchResults(results);
//     setIsOpen(true); // نفتح قائمة النتائج حتى لو مافيش نتائج
//   }, [searchTerm]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleResultClick = (productId) => {
//     navigate(`/products/${productId}`);
//     setSearchTerm('');
//     setIsOpen(false);
//     setHasSearched(false);
//   };

//   const handleInputBlur = () => {
//     setTimeout(() => setIsOpen(false), 200);
//   };

//   const handleInputFocus = () => {
//     if (searchTerm.trim() !== '') {
//       setIsOpen(true);
//     }
//   };

//   const handleClearSearch = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//     setIsOpen(false);
//     setHasSearched(false);
//   };

//   return (
//     <div className="search-container">
//       <div className="search-input-wrapper">
//         <img src={SearchIcon} alt="Search" className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search for a product..."
//           value={searchTerm}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           className="search-input"
//         />
//         {searchTerm && (
//           <button className="clear-search-btn" onClick={handleClearSearch}>
//             ✕
//           </button>
//         )}
//       </div>
      
//       {isOpen && (
//         <div className="search-results">
//           {/* عرض النتائج إذا وجدت */}
//           {searchResults.length > 0 ? (
//             searchResults.map(product => (
//               <div
//                 key={product.id}
//                 className="search-result-item"
//                 onClick={() => handleResultClick(product.id)}
//               >
//                 <img 
//                   src={product.img} 
//                   alt={product.name} 
//                   className="result-image"
//                   onError={(e) => {
//                     e.target.src = '/assets/placeholder.jpg';
//                   }}
//                 />
//                 <div className="result-info">
//                   <h4>{product.name || 'اسم غير متوفر'}</h4>
//                   <p className="result-flavor">{product.flavor || 'نكهة غير متوفرة'}</p>
//                   <p className="result-price">EGP{product.price || 'غير متوفر'}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             /* عرض رسالة عدم وجود نتائج */
//             hasSearched && searchTerm.trim() !== '' && (
//               <div className="no-results-message">
//                 <div className="no-results-icon">🔍</div>
//                 <h4>لم نعثر على المنتج</h4>
//                 <p>عفواً، لا توجد نتائج للبحث عن "<strong>{searchTerm}</strong>"</p>
//                 <div className="suggestions">
//                   <p>حاول البحث باستخدام كلمات أخرى أو تصفح جميع المنتجات</p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../../data/products';
import './SearchBar.css';
import SearchIcon from '../../../public/assets/Icons/search-icon.svg';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  // دالة تنظيف النصوص للبحث بدقة أكبر
  const cleanText = (text) =>
    text?.toLowerCase().trim().replace(/[^\w\s]/gi, '') || '';

  useEffect(() => {
    const term = cleanText(searchTerm);

    if (term === '') {
      setSearchResults([]);
      setIsOpen(false);
      setHasSearched(false);
      return;
    }

    // Debounce — تنفيذ البحث بعد 300ms من توقف الكتابة
    const timeout = setTimeout(() => {
      const keywords = term.split(' ');

      const results = products.products
        .map((product) => {
          const fullText = cleanText(
            `${product.name} ${product.flavor} ${product.brand} ${product.description}`
          );

          // عدد الكلمات المتطابقة
          const matchScore = keywords.filter((word) =>
            fullText.includes(word)
          ).length;

          return { ...product, matchScore };
        })
        // استبعاد النتائج اللي ملهاش أي تطابق
        .filter((p) => p.matchScore > 0)
        // ترتيب من الأعلى تطابقًا
        .sort((a, b) => b.matchScore - a.matchScore);

      setSearchResults(results);
      setIsOpen(true);
      setHasSearched(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = (productId) => {
    navigate(`/products/${productId}`);
    setSearchTerm('');
    setIsOpen(false);
    setHasSearched(false);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleInputFocus = () => {
    if (searchTerm.trim() !== '') {
      setIsOpen(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsOpen(false);
    setHasSearched(false);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <img src={SearchIcon} alt="Search" className="search-icon" />

        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="search-input"
        />

        {searchTerm && (
          <button className="clear-search-btn" onClick={handleClearSearch}>
            ✕
          </button>
        )}
      </div>

      {isOpen && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => handleResultClick(product.id)}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="result-image"
                  onError={(e) => {
                    e.target.src = '/assets/placeholder.jpg';
                  }}
                />

                <div className="result-info">
                  <h4>{product.name || 'اسم غير متوفر'}</h4>
                  <p className="result-flavor">{product.flavor || 'نكهة غير متوفرة'}</p>
                  <p className="result-price">EGP{product.price || 'غير متوفر'}</p>
                </div>
              </div>
            ))
          ) : (
            hasSearched &&
            searchTerm.trim() !== '' && (
              <div className="no-results-message">
                <div className="no-results-icon">🔍</div>
                <h4>لم نعثر على المنتج</h4>
                <p>
                  عفواً، لا توجد نتائج للبحث عن "
                  <strong>{searchTerm}</strong>"
                </p>
                <div className="suggestions">
                  <p>حاول البحث باستخدام كلمات أخرى أو تصفح جميع المنتجات</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
