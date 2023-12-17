import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => {
    
  const buttonStyle = {
    // Add your default button styles here
    padding: '5px 8px',
    fontSize: '16px',
    cursor: 'pointer',
    // You can add more styles based on the class
    ...(className === 'primary' && {
      backgroundColor: '#007bff',
      color: '#fff',
    }),
    // Add more class-based styles as needed
  };

  return (
    <button className={className} style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;