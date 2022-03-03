import React from 'react';

export default function SearchResults({ foodResult, handleAdd })
{
  if (!foodResult)
  {
    return (
      <img
        src="https://media.giphy.com/media/WsMOkoJpQEgF0HHLfH/giphy.gif"
        className="empty-list">
      </img>
    )
  }

  // const food = foodResult.items[0];

  return (
    foodResult ?
      <div className="nutrition-facts">
        <h2> {foodResult.name.toUpperCase()}</h2>
        <p>Serving Size: {foodResult.serving_size_g}g</p>
        <h3>Calories: {foodResult.calories}</h3>
        <h4>Fats: {foodResult.fat_total_g}g</h4>
        <p>Saturated Fats: {foodResult.fat_saturated_g}g</p>
        <h4>Carbs: {foodResult.carbohydrates_total_g}g</h4>
        <p>Sugar: {foodResult.sugar_g}g</p>
        <p>Fiber: {foodResult.fiber_g}g</p>
        <h4>Protein: {foodResult.protein_g}g</h4>
        <button id="add-food" onClick={handleAdd}>Add</button>
      </div > :
      null)
}