import React, { useState, useRef, useEffect } from 'react';
import './OptimizedVideo.css';

const OptimizedVideo = ({ 
  src, 
  poster, 
  alt = "فيديو منتج",
  width = "100%",
  height = "auto",
  autoPlay = false,
  muted = true,
  loop = true,
  controls = true,
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(autoPlay);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // مراقبة ظهور الفيديو في الشاشة
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        if (videoRef.current) {
          if (isIntersecting && shouldPlay) {
            videoRef.current.play().catch(() => {
              // تجاهل الأخطاء إذا لم يسمح المتصفح بالتشغيل التلقائي
            });
          } else if (!isIntersecting) {
            videoRef.current.pause();
          }
        }
      },
      { 
        threshold: 0.3, // عندما يكون 30% من الفيديو ظاهر
        rootMargin: '50px' // ابدأ التحميل قبل 50px من الظهور
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldPlay]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setShowPoster(false);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setShouldPlay(true);
      } else {
        videoRef.current.pause();
        setShouldPlay(false);
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  return (
    <div 
      ref={containerRef}
      className={`optimized-video-container ${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{ width, height }}
      onClick={handleVideoClick}
    >
      {/* الفيديو */}
      {isVisible && (
        <video
          ref={videoRef}
          className="optimized-video"
          preload="metadata" // تحميل البيانات الأساسية فقط أولاً
          playsInline
          muted={muted}
          loop={loop}
          controls={controls}
          poster={poster}
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          متصفحك لا يدعم تشغيل الفيديوهات.
        </video>
      )}

      {/* البوستر يظهر أثناء التحميل */}
      {showPoster && poster && (
        <img 
          src={poster} 
          alt={alt}
          className="video-poster"
          loading="lazy"
        />
      )}

      {/* شاشة التحميل */}
      {!isLoaded && (
        <div className="video-loading-overlay">
          <div className="loading-spinner"></div>
          <span>جاري تحميل الفيديو...</span>
        </div>
      )}

      {/* زر التشغيل/الإيقاف */}
      {isLoaded && !controls && (
        <div className="video-controls-overlay">
          <button 
            className="play-pause-btn"
            onClick={handlePlayPause}
          >
            {shouldPlay ? '⏸️' : '▶️'}
          </button>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;