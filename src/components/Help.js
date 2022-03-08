import React from 'react';

export default function Help()
{
  return (
    <div className="help-container">
      <div className="help-steps">
        <h3>Instructions</h3>
        <p><span>Step 1:</span> Enter info in settings. </p>
        <p><span>Step 2:</span> Search for food or drink items.</p>
        <p><span>Step 3:</span> Add Search Results to your List of Foods</p>
        <p><span>Step 4:</span> View your total calories and macronutrients in Nutritional Summary.</p>
      </div>
      <div className="help-tips">
        <h3>Tips</h3>
        <p><span>-</span> You can prefix a quantity before the item.</p>
        <p><span>-</span> Default serving size is 100g.</p>
        <p><span>-</span> Queries can't exceed 1500 characters.</p>
        <p><span>-</span> Add items to List of Foods with the green-plus-icon.</p>
        <p><span>-</span> Remove items from List of Foods with the red-trash-icon.</p>
      </div>
    </div >
  )
}