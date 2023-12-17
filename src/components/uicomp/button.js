import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => {
    
  const buttonStyle = {
    // Add your default button styles here
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    ...(className === 'primary' && {
      backgroundColor: 'transparent',
    }),
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