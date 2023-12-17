import React from 'react';

const Icon = ({ src, alt, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`icon ${className}`} onClick={handleClick}>
      <img src={src} alt={alt} className="icon-image" />
    </div>
  );
};

export { Icon };