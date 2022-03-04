import React, { useContext, useEffect } from 'react';
import NutritionTotal from './NutritionTotal';
import FoodList from './FoodList';
import { UserContext } from '../UserContext';

export default function Home()
{
  const { userFoods, setUserFoods } = useContext(UserContext);

  function handleRemove(event)
  {
    const index = event.target.parentElement.attributes.listindex.value;

    const newArray = [...userFoods];
    newArray.splice(index, 1);

    setUserFoods([...newArray]);
  }

  console.log(userFoods);

  return (
    <div>
      <NutritionTotal />
      <FoodList
        userFoods={userFoods}
        handleRemove={handleRemove} />
    </div>
  )
}