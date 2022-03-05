import React, { useContext } from 'react';
import NutritionTotals from './NutritionTotals';
import FoodList from './FoodList';
import { UserContext } from '../UserContext';

export default function Home()
{
  const { userFoods, setUserFoods } = useContext(UserContext);
  // const { showFullView, setShowFullView } = 

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
    <div>
      <NutritionTotals totals={totals} />
      <FoodList userFoods={userFoods} handleRemove={handleRemove} />
    </div>
  )
}