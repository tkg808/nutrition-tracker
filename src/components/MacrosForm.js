import React from 'react';

export default function MacrosForm({ userMacros, handleSubmit })
{
  return (
    <form className="macros-form" onSubmit={handleSubmit}>
      <label htmlFor="form-proteins">Proteins %: </label>
      <input
        type="number"
        id="form-proteins"
        placeholder={userMacros && userMacros.proteinsPercent}
        min="25"
        max="60"
        required />
      <label htmlFor="form-fats">Fats %: </label>
      <input
        type="number"
        id="form-fats"
        placeholder={userMacros && userMacros.fatsPercent}
        min="15"
        max="40"
        required />
      <label htmlFor="form-carbs">Carbs %: </label>
      <input
        type="number"
        id="form-carbs"
        placeholder={userMacros && userMacros.fatsPercent}
        min="0"
        max="60"
        required />
      <button type="submit">Submit</button>
    </form>
  )
}