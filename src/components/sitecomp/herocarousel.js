import React from 'react';
import useAdCarousel from '../hooks/useadcarousel';
import Button from '../uicomp/button';

const adsData = [
  {
    title: "Welcome to our Website",
    description: "Discover amazing things here",
    image: "url-to-image-1",
    cta: "CTA Button",
  },
  {
    title: "Ad 2",
    description: "Description for Ad 2",
    image: "url-to-image-2",
    cta: "CTA for Ad 2",
  },
  {
    title: "Ad 3",
    description: "Description for Ad 3",
    image: "url-to-image-3",
    cta: "CTA for Ad 3",
  },
  {
    title: "Ad 4",
    description: "Description for Ad 4",
    image: "url-to-image-4",
    cta: "CTA for Ad 4",
  },
  {
    title: "Ad 5",
    description: "Description for Ad 5",
    image: "url-to-image-5",
    cta: "CTA for Ad 5",
  },
];

const HeroCarousel = () => {
  const { currentAd } = useAdCarousel(0, 5000, adsData);

  return (
    <div className="ad-carousel" style={{ backgroundImage: `url(${adsData[currentAd].image})` }}>
      <div className="hero-content">
        <h1>{adsData[currentAd].title}</h1>
        <p>{adsData[currentAd].description}</p>
        <Button onClick={() => console.log(adsData[currentAd].cta)} label={adsData[currentAd].cta} />
      </div>
    </div>
  );
};

export default HeroCarousel;