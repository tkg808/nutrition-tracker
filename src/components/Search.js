import React, { useState, useContext } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { UserContext } from '../UserContext';

export default function Search()
{
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { userFoods, setUserFoods } = useContext(UserContext);

  function handleChange(event)
  {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log("Sent!");

    const url = `https://api.calorieninjas.com/v1/nutrition?query=${searchInput}`

    fetch(url, { headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY } })
      .then((response) =>
      {
        return response.json();
      })
      .then((data) =>
      {
        setSearchResults(data.items);
        console.log(data.items);
      })
      .catch((error) =>
      {
        console.log("Something went wrong...", error);
      })
  }

  function handleAdd(event)
  {
    // index of the food item associated with the icon clicked.
    const index = event.target.parentElement.parentElement.parentElement.attributes.listindex.value;

    // updates UserContext without directly accessing it.
    const newArray = [...searchResults];
    setUserFoods([...userFoods, newArray[index]]);

    // updates SearchResults state without directly accessing it.
    newArray.splice(index, 1);
    setSearchResults([...newArray]);
  }

  return (
    <div className="search-container">
      <SearchForm
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SearchResults
        searchResults={searchResults}
        handleAdd={handleAdd} />
    </div>
  )
}