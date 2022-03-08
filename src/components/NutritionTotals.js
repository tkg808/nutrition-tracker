import React from 'react';

export default function NutritionTotals({ totals })
{
  return (
    <div className="totals-container">
      <p>Total Calories: {totals.calories.toFixed(1)}cals</p>
      <p>Total Fats: {totals.fats.toFixed(1)}g</p>
      <p>Total Carbs: {totals.carbs.toFixed(1)}g</p>
      <p>Total Proteins: {totals.proteins.toFixed(1)}g</p>
    </div>
  )
}