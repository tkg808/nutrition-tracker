import React from 'react';

export default function NutritionTotals({ totals })
{
  return (
    <div className="summary-container">
      <h2>Nutrition Summary</h2>
      <p>Total Calories: {totals.calories.toFixed(1)}g</p>
      <p>Total Fats: {totals.fats.toFixed(1)}g</p>
      <p>Total Carbs: {totals.carbs.toFixed(1)}g</p>
      <p>Total Proteins: {totals.proteins.toFixed(1)}g</p>
    </div>
  )
}