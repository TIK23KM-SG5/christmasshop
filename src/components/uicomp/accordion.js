import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion ${isActive ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      <div className={`panel ${isActive ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;