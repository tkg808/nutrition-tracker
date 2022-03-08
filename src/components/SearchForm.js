import React from 'react';

export default function SearchForm({ searchInput, handleChange, handleSubmit })
{
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input"></label>
        <textarea
          type="text"
          id="search-input"
          value={searchInput}
          onChange={handleChange}
          rows="5"
          cols="40"
          placeholder="Example: 8oz steak, 2 eggs, and rice"
          required />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}