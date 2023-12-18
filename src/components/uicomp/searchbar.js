import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by product name or category"
        value={searchTerm}
        onChange={handleInputChange}
        className='search-input'
      />
    </div>
  );
};

export default SearchBar;