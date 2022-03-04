import React, { useContext, useEffect } from 'react';
import NutritionTotal from './NutritionTotal';
import FoodList from './FoodList';
import { UserContext } from '../UserContext';

export default function Home()
{
  const { userFoods, setUserFoods } = useContext(UserContext);

  function handleRemove(event)
  {
    console.log(event.target.parentElement.attributes.listindex.value);
  }

  return (
    <div>
      <NutritionTotal />
      <FoodList
        userFoods={userFoods}
        handleRemove={handleRemove} />
    </div>
  )
}