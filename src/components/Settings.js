import React, { useContext } from 'react';
import SettingsForm from './SettingsForm';
import { UserSettings } from '../UserSettings';

export default function Settings()
{
  const { userSettings, setUserSettings } = useContext(UserSettings);

  function handleSettingsSubmit(event)
  {
    event.preventDefault();

    // updates userSettings context without directly accessing it.
    const newSettings = { ...userSettings };
    newSettings.gender = event.target[0].value;
    newSettings.age = event.target[1].value;
    newSettings.height = event.target[2].value;
    newSettings.weight = event.target[3].value;
    newSettings.activityLevel = parseFloat(event.target[4].value);
    setUserSettings({ ...newSettings });
  }

  return (
    <div className="settings-container">
      <SettingsForm userSettings={userSettings} handleSettingsSubmit={handleSettingsSubmit} />
      <div className="info-container">
        <h4 className="bmr">Basal Metabolic Rate (BMR): {userSettings.bmr() < 6 ? "~" : `${userSettings.bmr()} cals`}</h4>
        <h4 className="daily-calories">Daily Caloric Needs: {userSettings.bmr() < 6 ? "~" : `${userSettings.dailyCalories()} cals`}</h4>
      </div>
    </div>
  );
}