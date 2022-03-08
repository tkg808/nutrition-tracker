import React, { useState, useContext, useReducer } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { UserContext } from '../UserContext';

export default function Search()
{
  // state for user input.
  const [searchInput, setSearchInput] = useState("");

  // context to track user food list.
  const { userFoods, setUserFoods } = useContext(UserContext);

  const initialState =
  {
    loading: false,
    searchResults: [],
    error: ""
  }

  // reducer to manage loading, searchResults, and error states.
  const [state, dispatch] = useReducer(apiStateReducer, initialState);
  const { loading, searchResults, error } = state;

  // reducer callback function.
  function apiStateReducer(state, action)
  {
    switch (action.type)
    {
      case "loading":
        {
          return { ...initialState, loading: true };
        }
      case "success":
        {
          return { ...state, loading: false, searchResults: action.data.items };
        }
      case "update":
        {
          return { ...state, loading: false, searchResults: action.newArray }
        }
      case "error":
        {
          return { ...state, loading: false, error: action.error };
        }
      default: return state;
    }
  }

  function handleChange(event)
  {
    console.log(event);
    console.log(event.target);
    setSearchInput(event.target.value);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    // resets state before fetching new data.
    dispatch({ type: "loading" });

    const url = `https://api.calorieninjas.com/v1/nutrition?query=${searchInput}`;

    fetch(url, { headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY } })
      .then((response) =>
      {
        // manages different responses.
        if (response.status === 404)
        {
          return dispatch(
            {
              type: "error",
              error: `No results for ${searchInput}. Please try another search!`
            });
        }
        else if (response.status === 200)
        {
          return response.json();
        }
      })
      .then((data) =>
      {
        if (data.items.length === 0)
        {
          return dispatch(
            {
              type: "error",
              error: `No results for ${searchInput}. Please try another search!`
            });
        }
        dispatch({ type: "success", data });
      })
      .catch((error) =>
      {
        dispatch({
          type: "error",
          error: "Oops, something went wrong! Plelase try again later."
        })
      })
  }

  function handleAdd(event)
  {
    // index of the food item associated with the icon clicked.
    // temporary solution to click inconsistently targeting svg or path.
    const index = (event.target.tagName === "svg" ?
      event.target.parentElement.parentElement.parentElement.attributes.listindex.value :
      event.target.parentElement.parentElement.parentElement.parentElement.attributes.listindex.value);

    // updates UserContext without directly accessing it.
    const newArray = [...searchResults];
    setUserFoods([...userFoods, newArray[index]]);

    // updates SearchResults state without directly accessing it.
    newArray.splice(index, 1);
    dispatch({ type: "update", newArray })
  }

  console.log(error);

  return (
    <div className="search-container">
      <SearchForm
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Search Results</h2>
      {searchResults && <SearchResults
        searchResults={searchResults}
        handleAdd={handleAdd} />}
      {!loading && !searchResults.length && !error && <p className="search-tip">Try searching for a food/meal above...</p>}
      {loading && <p className="loading-tip">Looking for your food(s) now!</p>}
      {error && error}
    </div >
  )
}