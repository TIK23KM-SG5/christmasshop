import { useState, useEffect } from 'react';

const useAdCarousel = (initialIndex, intervalTime, adsData) => {
  const [currentAd, setCurrentAd] = useState(initialIndex);

  const changeAd = (newIndex) => {
    setCurrentAd(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentAd + 1) % adsData.length;
      changeAd(newIndex);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentAd, adsData, intervalTime]);

  return { currentAd, changeAd };
};

export default useAdCarousel;