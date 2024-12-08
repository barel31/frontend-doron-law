import { useState, useEffect } from 'react';

export const useImagePreloader = (images: string[]) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);
  const [loadedCount, setLoadedCount] = useState<number>(0);

  useEffect(() => {
    let loadedImages = 0;
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        setLoadedCount(loadedImages);
        if (loadedImages === images.length) {
          setAllImagesLoaded(true);
        }
      };
    });
  }, [images]);

  return { allImagesLoaded, loadedCount };
};
