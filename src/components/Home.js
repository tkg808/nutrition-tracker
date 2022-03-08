import React, { useContext, useState } from 'react';
import NutritionTotals from './NutritionTotals';
import FoodList from './FoodList';
import { UserContext } from '../UserContext';
import { UserSettings } from '../UserSettings';

export default function Home()
{
  const { userFoods, setUserFoods } = useContext(UserContext);
  const { userSettings } = useContext(UserSettings);

  const totals =
  {
    "calories": 0,
    "fats": 0,
    "carbs": 0,
    "proteins": 0
  }

  userFoods.forEach((food) => 
  {
    totals.calories += food.calories;
    totals.fats += food.fat_total_g;
    totals.carbs += food.carbohydrates_total_g;
    totals.proteins += food.protein_g;
  })

  function handleRemove(event)
  {
    // index of the food item associated with the icon clicked.
    // temporary solution to click inconsistently targeting svg or path.
    const index = (event.target.tagName === "svg" ?
      event.target.parentElement.parentElement.parentElement.attributes.listindex.value :
      event.target.parentElement.parentElement.parentElement.parentElement.attributes.listindex.value);

    // removes clicked food item and updates UserContext without directly accessing it.
    const newArray = [...userFoods];
    newArray.splice(index, 1);
    setUserFoods([...newArray]);
  }

  return (
    <div className="home-container">
      <div className="summary-container">
        <h2>Nutrition Summary</h2>
        <h4>BMR:
          {userSettings.bmr() < 6 ? " ~" : ` ${userSettings.bmr()} cals`}</h4>
        <h4>Daily Calorie Needs:
          {userSettings.dailyCalories() < 6 ? " ~" : ` ${userSettings.dailyCalories()} cals`}</h4>
        <NutritionTotals totals={totals} />
      </div>
      <FoodList userFoods={userFoods} handleRemove={handleRemove} />
    </div>
  )
}