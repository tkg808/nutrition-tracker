import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function SearchResults({ searchResults, handleAdd })
{
  return (
    <div className="list-container">
      <ul className="list">
        {searchResults.map((food, index) =>
        {
          return (
            <li className="food-item" key={index} listindex={index}>
              <div className="item-header">
                <h4 className="item-name">
                  {food.name.toUpperCase()} - {food.calories} calories
                </h4>
                <div className="item-icons">
                  <FaPlusCircle
                    className="icon"
                    id="add-food"
                    onClick={handleAdd}
                    style={{ color: "green" }} />
                </div>
              </div>
              <p className="item-servings">Serving Size: {food.serving_size_g.toFixed(1)}g</p>
              <div className="item-macros">
                <p>Fats: {food.fat_total_g}g</p>
                <p>Carbs: {food.carbohydrates_total_g}g</p>
                <p>Protein: {food.protein_g}g</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}