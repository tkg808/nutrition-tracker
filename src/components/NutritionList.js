import React from 'react';

export default function NutritionList()
{
  const foods = [];
  return (
    <div className="nutrition-list-container">
      <h3>List of Foods</h3>
      {
        foods.length ? <p>Foodsss</p> :
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