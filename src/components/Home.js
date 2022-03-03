import React from 'react';
import NutritionTotal from './NutritionTotal';
import NutritionList from './NutritionList';

export default function Home()
{
  return (
    <div>
      <NutritionTotal />
      <NutritionList />
    </div>
  )
}