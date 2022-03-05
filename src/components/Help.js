import React from 'react';

export default function Help({ handleHelp })
{


  return (
    <div className="help-dialogue">
      <div className="help-steps">
        <h3>Instructions</h3>
        <p>Step 1: Search for food or drink items.</p>
        <p>Step 2: Add Search Results to your List of Foods</p>
        <p>Step 3: View your total calories and macronutrients in Nutritional Summary.</p>
      </div>
      <div className="help-rules">
        <h3>Tips</h3>
        <p>- You can prefix a quantity before the item.</p>
        <p>- Default serving size is 100g.</p>
        <p>- Queries can't exceed 1500 characters.</p>
        <p>- Add items to List of Foods with the green-plus-icon.</p>
        <p>- Remove items from List of Foods with the red-trash-icon.</p>
      </div>
    </div >
  )
}