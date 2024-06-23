// Search.js
import React, { useState } from 'react';
import Input from './Input';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} style={formStyle}>
      <Input 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search..." 
      />
      <button type="submit" style={buttonStyle}>Search</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
};

export default Search;
