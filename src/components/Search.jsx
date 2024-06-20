import React, { useState } from 'react';
import '../styles/index.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        required="true"
      />
      <button type="submit" className='btn'>SEARCH</button>
    </form>
  );
};

export default SearchBar;
