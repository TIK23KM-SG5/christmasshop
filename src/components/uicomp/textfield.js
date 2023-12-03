import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, onSubmit, validate, placeholder, initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue || '');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    // Reset error when input changes
    setError(null);
  };

  const handleInputBlur = () => {
    // Validate input on blur
    if (validate && !validate(inputValue)) {
      setError('Invalid input');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate input before submitting
    if (validate && !validate(inputValue)) {
      setError('Invalid input');
    } else {
      onSubmit(inputValue);
      setInputValue(''); // Clear input after submission
      setError(null);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        {label}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
        />
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  validate: PropTypes.func, // Validation function (return true for valid input)
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
};

export default TextField;