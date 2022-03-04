import React from 'react';

export default function NutritionTotal({ totals })
{
  return (
    <div className="summary-container">
      <h2>Nutritional Summary</h2>
      <p>Total Calories: {totals.calories}g</p>
      <p>Total Fats: {totals.fats}g</p>
      <p>Total Carbs: {totals.carbs}g</p>
      <p>Total Proteins: {totals.proteins}g</p>
    </div>
  )
}