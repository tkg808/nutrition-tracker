import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function Search()
{
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event)
  {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log("Sent!");

    const url = `https://api.calorieninjas.com/v1/nutrition?query=${searchInput}`

    fetch(url, {
      headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY }
    })
      .then((response) =>
      {
        return response.json();
      })
      .then((data) =>
      {
        console.log(data);
      })
      .catch((error) =>
      {
        console.log("Something went wrong...", error);
      })
  }

  console.log(searchInput);

  return (
    <div className="search-container">
      <SearchForm
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SearchResults />
    </div>
  )
}