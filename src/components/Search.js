import React, { useState, useContext } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { UserContext } from '../UserContext';

export default function Search()
{
  const [searchInput, setSearchInput] = useState("");
  const [foodResult, setFoodResult] = useState(null);
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
        setFoodResult(data.items[0]);
      })
      .catch((error) =>
      {
        console.log("Something went wrong...", error);
      })
  }

  function handleAdd()
  {
    setUserFoods([...userFoods, foodResult]);
  }

  return (
    <div className="search-container">
      <SearchForm
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SearchResults
        foodResult={foodResult}
        handleAdd={handleAdd} />
    </div>
  )
}