import React from 'react';

export default function SearchForm({ searchInput, handleChange, handleSubmit })
{
  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="search-input"></label>
        <textarea
          type="text"
          id="search-input"
          value={searchInput}
          onChange={handleChange}
          placeholder="Example: 8oz steak, 2 eggs, and rice"
          required />
        <button type="submit">Search</button>
      </form>
    </>
  )
}