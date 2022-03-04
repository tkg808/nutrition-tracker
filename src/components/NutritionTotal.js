import React from 'react';

export default function NutritionTotal({ totals })
{
  return (
    <div>
      <h3>Total Nutrition</h3>
      <p>Total Calories: {totals.calories}g</p>
      <p>Total Fats: {totals.fats}g</p>
      <p>Total Carbs: {totals.carbs}g</p>
      <p>Total Proteins: {totals.proteins}g</p>
    </div>
  )
}