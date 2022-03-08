import React, { useState, useContext } from 'react';
import SettingsForm from './SettingsForm';
import { UserSettings } from '../UserSettings';

export default function Settings()
{
  const { userSettings, setUserSettings } = useContext(UserSettings);

  function handleSettingsSubmit(event)
  {
    event.preventDefault();

    const newSettings = { ...userSettings };
    newSettings.gender = event.target[0].value;
    newSettings.age = event.target[1].value;
    newSettings.height = event.target[2].value;
    newSettings.weight = event.target[3].value;
    newSettings.activityLevel = parseFloat(event.target[4].value);

    setUserSettings({ ...newSettings });
  }

  console.log(userSettings);
  console.log(userSettings.bmr());
  console.log(userSettings.activityLevel);
  console.log(userSettings.dailyCalories());

  return (
    <div className="settings-container">
      <SettingsForm userSettings={userSettings} handleSettingsSubmit={handleSettingsSubmit} />
      {userSettings.bmr() > 5 &&
        <p className="bmr">Your Basal Metabolic Rate (BMR) is {userSettings.bmr()}, and according to your activity level, you need around {userSettings.dailyCalories()} calories per day.</p>}

    </div>
  );
}