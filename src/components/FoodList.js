import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function FoodList({ userFoods, handleRemove })
{
  return (
    <div className="list-container">
      <h2>List of Foods</h2>
      {
        userFoods.length ?
          <ul className="list">
            {userFoods.map((food, index) =>
            {
              return (
                <li className="food-item" key={index} listindex={index}>
                  <div className="item-header">
                    <FaTrashAlt
                      id="remove-food"
                      onClick={handleRemove}
                      style={{ color: "red" }} />
                    <h4 className="item-name"> {food.name.toUpperCase()} - {food.calories} calories</h4>
                  </div>
                  <p>Serving Size: {food.serving_size_g.toFixed(1)}g</p>
                  <div className="item-macros">
                    <div className="fats">
                      <p>Fats: {food.fat_total_g}g</p>
                      <p>Saturated Fats: {food.fat_saturated_g}g</p>
                    </div>
                    <div className="carbs">
                      <p>Carbs: {food.carbohydrates_total_g}g</p>
                      <p>Sugar: {food.sugar_g}g</p>
                      <p>Fiber: {food.fiber_g}g</p>
                    </div>
                    <p className="protein">Protein: {food.protein_g}g</p>
                  </div>
                </li>
              )
            })}
          </ul> :
          <>
            <img
              src="https://media.giphy.com/media/WsMOkoJpQEgF0HHLfH/giphy.gif"
              className="empty">
            </img>
            <p>No food?! Go "Search" for food to add to this list...</p>
          </>
      }
    </div>
  );
}