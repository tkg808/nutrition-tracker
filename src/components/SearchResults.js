import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function SearchResults({ searchResults, handleAdd })
{
  return (
    <div className="list-container">
      <h2>Search Results</h2>
      {
        searchResults.length ?
          <ul className="list">
            {searchResults.map((food, index) =>
            {
              return (
                <li className="food-item" key={index} listindex={index}>
                  <div className="item-header">
                    <h4 className="item-name">
                      {food.name.toUpperCase()} - {food.calories} calories
                    </h4>
                    <div className="item-icons">
                      <FaPlusCircle
                        id="add-food"
                        onClick={handleAdd}
                        style={{ color: "green" }} />
                    </div>
                  </div>
                  <p className="item-servings">Serving Size: {food.serving_size_g.toFixed(1)}g</p>
                  <div className="item-macros">
                    <p>Fats: {food.fat_total_g}g</p>
                    <p>Carbs: {food.carbohydrates_total_g}g</p>
                    <p>Protein: {food.protein_g}g</p>
                  </div>
                </li>
              )
            })}
          </ul> :
          <p className="results-tip">Try searching for a food/meal above...</p>
      }
    </div>
  )


  //(searchResults.length ?
  //   searchResults.map((food, index) =>
  //   {
  //     return (
  //       <div className="nutrition-facts" key={index} listindex={index}>
  //         <h2> {food.name.toUpperCase()}</h2>
  //         <p>Serving Size: {food.serving_size_g}g</p>
  //         <h3>Calories: {food.calories}</h3>
  //         <h4>Fats: {food.fat_total_g}g</h4>
  //         <p>Saturated Fats: {food.fat_saturated_g}g</p>
  //         <h4>Carbs: {food.carbohydrates_total_g}g</h4>
  //         <p>Sugar: {food.sugar_g}g</p>
  //         <p>Fiber: {food.fiber_g}g</p>
  //         <h4>Protein: {food.protein_g}g</h4>
  //         <button id="add-food" onClick={handleAdd}>Add</button>
  //       </div >);
  //   }) :
  //   <img
  //     src="https://media.giphy.com/media/WsMOkoJpQEgF0HHLfH/giphy.gif"
  //     className="empty">
  //   </img>
  // )
}