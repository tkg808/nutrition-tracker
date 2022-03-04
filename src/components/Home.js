import React, { useContext, useEffect } from 'react';
import NutritionTotal from './NutritionTotal';
import FoodList from './FoodList';
import { UserContext } from '../UserContext';

export default function Home()
{
  const { userFoods, setUserFoods } = useContext(UserContext);

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
    const index = event.target.parentElement.parentElement.parentElement.attributes.listindex.value;

    const newArray = [...userFoods];
    newArray.splice(index, 1);

    setUserFoods([...newArray]);
  }

  return (
    <div>
      <NutritionTotal totals={totals} />
      <FoodList userFoods={userFoods} handleRemove={handleRemove} />
    </div>
  )
}