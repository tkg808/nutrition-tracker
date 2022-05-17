import React from 'react';

export default function NutritionTotals({ totals, userMetrics })
{
  return (
    <div className="totals-container">
      <h4>BMR: {userMetrics.bmr} cals</h4>
      <h4>Daily Calorie Needs: {userMetrics.dailyCalories} cals</h4>
      <p>Total Calories: {totals.calories.toFixed(1)} cals</p>
      <p>Total Fats: {totals.fats.toFixed(1)}g</p>
      <p>Total Carbs: {totals.carbs.toFixed(1)}g</p>
      <p>Total Proteins: {totals.proteins.toFixed(1)}g</p>
    </div>
  )
}