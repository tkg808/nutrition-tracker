import React, { useContext } from 'react';
import NutritionTotals from './NutritionTotals';
import FoodList from './FoodList';
import { FoodsContext, MetricsContext } from '../UserContext';
import Graph from './Graph';
import { NT_API_URL } from '../apiConfig';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Home({ getUserFoods })
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

  function deleteFood(foodId)
  {
    axios.delete(NT_API_URL + `foods/${foodId}`,
      {
        headers:
        {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((response) => 
      {
        if (response.status === 204)
        {
          setUserFoods((prevState) =>
          {
            return prevState.filter((food) => food._id !== foodId);
          });
        }
      });
  }

  return (
    <div className="home-container">
      <h2>Nutrition Summary</h2>
      <div className="summary-container">
        <NutritionTotals totals={totals} userMetrics={userMetrics} />
        <Graph className="graph" />
      </div>
      <FoodList userFoods={userFoods} deleteFood={deleteFood} />
      {!userFoods.length && <p className="list-tip">Search for foods/meals to add to this list...</p>}
    </div>
  )
}