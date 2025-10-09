// import React, { useState } from 'react'
// import './Slider.css'

// export default function Slider({ items }){
//   const [idx, setIdx] = useState(0)
//   const prev = ()=> setIdx(i => i===0? items.length-1 : i-1)
//   const next = ()=> setIdx(i => i===items.length-1? 0 : i+1)
//   return (
//     <section className="slider" id="top">
//       <div className="slider-inner">
//         <button className="arrow left" onClick={prev}>‹</button>
//         <div className="slide">
//           <img src={items[idx].img} alt={items[idx].title} />
//         </div>
//         <button className="arrow right" onClick={next}>›</button>
//       </div>
//     </section>
//   )
// }

import React, { useState, useEffect } from "react";
import "./Slider.css";

export default function Slider({ items }) {
  const [idx, setIdx] = useState(0);

  // التمرير التلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000); // تغيير الصورة كل 4 ثواني

    return () => clearInterval(interval);
  }, [idx]);

  const prev = () => setIdx((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="slider" id="top">
      <div className="slider-inner">
        <button className="arrow left" onClick={prev}>
          &#10094;
        </button>

        <div className="slides-container">
          {items.map((item, index) => (
            <div
              key={index}
              className={`slide ${index === idx ? "active" : ""}`}
              style={{ backgroundImage: `url(${item})` }}
            >
              <div className="slide-content">
                {/* <h2>{item.titleOne}</h2>
                <p>{item.titleTwo}</p> */}
                <img src={items[idx].img}  />
                <video src={item.video} 
                       muted 
                       loop 
                       autoPlay 
                       playsInline
                       preload="auto"
                       loading="lazy"
                ></video>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next}>
          &#10095;
        </button>

        {/* نقاط التنقل */}
        <div className="dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === idx ? "active" : ""}`}
              onClick={() => setIdx(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
