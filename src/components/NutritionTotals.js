import React from 'react';

export default function NutritionTotals({ totals })
{
  return (
    <div className="totals-container">
      <p>Calories: {totals.calories.toFixed(1)} cals</p>
      <p>Fats: {totals.fats.toFixed(1)} g</p>
      <p>Carbs: {totals.carbs.toFixed(1)} g</p>
      <p>Proteins: {totals.proteins.toFixed(1)} g</p>
    </div>
  )
}