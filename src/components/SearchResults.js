import React from 'react';

export default function SearchResults({ searchResults, handleAdd })
{

  return (searchResults.length ?
    searchResults.map((food, key) =>
    {
      return (
        <div className="nutrition-facts" key={key}>
          <h2> {food.name.toUpperCase()}</h2>
          <p>Serving Size: {food.serving_size_g}g</p>
          <h3>Calories: {food.calories}</h3>
          <h4>Fats: {food.fat_total_g}g</h4>
          <p>Saturated Fats: {food.fat_saturated_g}g</p>
          <h4>Carbs: {food.carbohydrates_total_g}g</h4>
          <p>Sugar: {food.sugar_g}g</p>
          <p>Fiber: {food.fiber_g}g</p>
          <h4>Protein: {food.protein_g}g</h4>
          <button id="add-food" onClick={handleAdd}>Add</button>
        </div >);
    }) :
    <img
      src="https://media.giphy.com/media/WsMOkoJpQEgF0HHLfH/giphy.gif"
      className="empty-list">
    </img>
  )
}