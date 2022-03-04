import React from 'react';

export default function FoodList({ userFoods, handleRemove })
{
  return (
    <div className="nutrition-list-container">
      <h3>List of Foods</h3>
      {
        userFoods.length ?
          <ul className="list-container">
            {userFoods.map((food, index) =>
            {
              return (
                <li className="food-item" key={index} listindex={index}>
                  <h2> {food.name}</h2>
                  <p>Serving Size: {food.serving_size_g}g</p>
                  <h3>Calories: {food.calories}</h3>
                  <h4>Fats: {food.fat_total_g}g</h4>
                  <p>Saturated Fats: {food.fat_saturated_g}g</p>
                  <h4>Carbs: {food.carbohydrates_total_g}g</h4>
                  <p>Sugar: {food.sugar_g}g</p>
                  <p>Fiber: {food.fiber_g}g</p>
                  <h4>Protein: {food.protein_g}g</h4>
                  <button id="remove-food" onClick={handleRemove}>Remove</button>
                </li>
              )
            })}
          </ul> :
          <>
            <img
              src="https://media.giphy.com/media/WsMOkoJpQEgF0HHLfH/giphy.gif"
              className="empty-list">
            </img>
            <p>Try adding some foods to your list...</p>
          </>
      }
    </div>
  );
}