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

    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchInput}&pageSize=20&api_key=${process.env.REACT_APP_USDA_KEY}`

    fetch(url)
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
    </div>
  )
}