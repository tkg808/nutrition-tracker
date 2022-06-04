import React, { useState, useContext, useReducer } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { FoodsContext } from '../UserContext';
import { NT_API_URL } from "../apiConfig";
import axios from "axios";

export default function Search({ loggedIn, userInfo })
{
  // state for user input.
  const [searchInput, setSearchInput] = useState("");

  // context to track user food list.
  const { userFoods, setUserFoods } = useContext(FoodsContext);

  // instantiates reducer.
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

  // search form -- textarea.
  function handleChange(event)
  {
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
        // fixes issue of bad input not being an error.
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
          error: "Oops, something went wrong! Please try again later."
        })
      })
  }

  function handleAdd(index)
  {
    // updates UserContext without directly accessing it.
    const newArray = [...searchResults];
    setUserFoods([...userFoods, newArray[index]]);

    // food item to add to db.
    const newFood = newArray.splice(index, 1)[0];

    axios.post(NT_API_URL + "foods/", newFood,
      {
        headers:
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((response) =>
      {
        if (response.status === 200)
        {
          dispatch({ type: "update", newArray });
        }
      });
  }

  if (!loggedIn && !userInfo)
  {
    return (
      <div className="settings-container">
        <h2>Measure what matters!</h2>
        <p>Find foods and their nutrients to be in control of your diet!</p>
        <img className="search-image" src="https://cdn.pixabay.com/photo/2016/03/05/21/43/appetite-1239056_960_720.jpg" alt="measure what matters" />
      </div>
    )
  }

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