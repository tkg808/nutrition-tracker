import React, { useContext } from 'react';
import SettingsForm from './SettingsForm';
import { UserSettings } from '../UserSettings';
import Composition from '../Composition';

export default function Settings()
{
  const { userSettings, setUserSettings } = useContext(UserSettings);

  function handleSettingsSubmit(event)
  {
    event.preventDefault();

    setUserSettings(new Composition(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value,
      parseFloat(event.target[4].value)
    ));
  }

  return (
    <div className="settings-container">
      <SettingsForm userSettings={userSettings} handleSettingsSubmit={handleSettingsSubmit} />
      <div className="info-container">
        <h4 className="bmr">Basal Metabolic Rate (BMR): {userSettings.bmr} cals</h4>
        <h4 className="daily-calories">Daily Caloric Needs: {userSettings.dailyCalories} cals</h4>
      </div>
    </div>
  );
}