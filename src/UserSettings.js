import React from 'react';

export const UserSettings = React.createContext(
  {
    gender: "male",
    age: 0,
    height: 0,
    weight: 0,
    activeLevel: 1,
    bmr: function ()
    {
      const base = (10 * this.weight) + (6.25 * this.height) - (5 * this.age);

      if (this.gender === "male")
      {
        return Math.round(base + 5);
      }
      else
      {
        return Math.round(base - 161);
      }
    },
    dailyCalories: function ()
    {
      return Math.round(this.bmr * this.activeLevel);
    }
  });