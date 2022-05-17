import React, { useContext } from 'react';
import NutritionTotals from './NutritionTotals';
import FoodList from './FoodList';
import { FoodsContext, MetricsContext } from '../UserContext';
import Graph from './Graph';

export default function Home()
{
  const { userFoods, setUserFoods } = useContext(FoodsContext);
  const { userMetrics } = useContext(MetricsContext);

  // tracks data to render.
  const totals =
  {
    "calories": 0,
    "fats": 0,
    "carbs": 0,
    "proteins": 0
  }

  // updates totals object.
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
    // Solution for pointer event inconsistently targetting svg or path.
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
      <h2>Nutrition Summary</h2>
      <div className="summary-container">
        <NutritionTotals totals={totals} userMetrics={userMetrics} />
        <Graph className="graph" />
      </div>
      <FoodList userFoods={userFoods} handleRemove={handleRemove} />
      {!userFoods.length && <p className="list-tip">Search for foods/meals to add to this list...</p>}
    </div>
  )
}