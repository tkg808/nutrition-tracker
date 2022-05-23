import React from 'react';

export default function NutritionTotals({ totals, userMetrics, userMacros })
{
  return (
    <div className="totals-container">
      {/* <h4>BMR: {userMetrics ? userMetrics.getBMR() : "~"} cals</h4>
      <h4>Daily Calorie Needs: {userMetrics ? userMetrics.getDailyCalories() : "~"} cals</h4> */}
      <p>Calories: {totals.calories.toFixed(1)} cals of {userMetrics ? userMetrics.getDailyCalories() : "~"} cals</p>
      <p>Fats: {totals.fats.toFixed(1)} g of {userMacros ? userMacros.getFats(userMetrics.getDailyCalories()) : "~"} g</p>
      <p>Carbs: {totals.carbs.toFixed(1)} g of {userMacros ? userMacros.getCarbs(userMetrics.getDailyCalories()) : "~"} g</p>
      <p>Proteins: {totals.proteins.toFixed(1)} g of {userMacros ? userMacros.getProteins(userMetrics.getDailyCalories()) : "~"} g</p>
    </div>
  )
}