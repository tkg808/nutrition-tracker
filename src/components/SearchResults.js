import React from 'react';

export default function SearchResults({ foodResult })
{
  if (!foodResult)
  {
    return <p>No food yet...</p>
  }

  const food = foodResult.items[0];

  return (
    <div className="nutrition-facts">
      <h2>{food.name.toUpperCase()}</h2>
      <p>Serving Size: {food.serving_size_g}g</p>
      <h3>Calories: {food.calories}</h3>
      <h4>Fats: {food.fat_total_g}g</h4>
      <p>Saturated Fats: {food.fat_saturated_g}g</p>
      <h4>Carbs: {food.carbohydrates_total_g}g</h4>
      <p>Sugar: {food.sugar_g}g</p>
      <p>Fiber: {food.fiber_g}g</p>
      <h4>Protein: {food.protein_g}g</h4>
    </div>
  )
}