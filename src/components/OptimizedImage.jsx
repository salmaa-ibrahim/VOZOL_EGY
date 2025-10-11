import React, { useState, useRef, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  placeholder = '/images/placeholder.jpg',
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      // تحميل فوري للصور المهمة
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px', 
        threshold: 0.1 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  useEffect(() => {
    if (isVisible) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        setIsLoaded(true);
      };
    }
  }, [isVisible, src]);

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-container ${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{ width, height }}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="optimized-image"
        loading={priority ? "eager" : "lazy"}
      />
      
      {!isLoaded && (
        <div className="image-skeleton">
          <div className="skeleton-animation"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;