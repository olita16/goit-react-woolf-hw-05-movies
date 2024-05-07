import React, { useState } from 'react';

const Form = ({ setSearchParams }) => {
  const [search, setSearch] = useState('');
  const handleFormSubmit = e => {
    e.preventDefault();
    const trimmedValue = search.trim().toLowerCase();
    if (trimmedValue !== '') {
      setSearchParams({ query: trimmedValue });
    }
  };

  return (
    <form className="searchForm" onSubmit={handleFormSubmit}>
      <button type="submit" className="searchFormButton">
        <span className="searchFormButtonLabel">Search</span>
      </button>

      <input
        className="searchFormInput"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Form;