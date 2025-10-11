import { useState, useEffect } from 'react';

export const useMediaLoader = (sources) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!sources.length) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    let loaded = 0;

    const handleLoad = () => {
      if (mounted) {
        loaded++;
        setLoadedCount(loaded);
        
        if (loaded === sources.length) {
          setIsLoading(false);
        }
      }
    };

    sources.forEach(src => {
      if (src.type === 'image') {
        const img = new Image();
        img.onload = handleLoad;
        img.onerror = handleLoad;
        img.src = src.url;
      }
    });

    return () => {
      mounted = false;
    };
  }, [sources]);

  const progress = sources.length > 0 ? (loadedCount / sources.length) * 100 : 100;

  return {
    isLoading,
    progress,
    loadedCount,
    totalCount: sources.length
  };
};