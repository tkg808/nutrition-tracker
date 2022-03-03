import React from 'react';

export default function SearchForm({ searchInput, handleChange, handleSubmit })
{

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input"></label>
        <input
          type="text"
          id="search-input"
          value={searchInput}
          onChange={handleChange}
          placeholder="search for a food"
          required />
        <button type="submit">Find My Food!</button>
      </form>
      <ul>

      </ul>
    </div>
  )
}