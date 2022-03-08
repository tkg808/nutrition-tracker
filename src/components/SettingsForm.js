import React from 'react';

export default function SettingsForm({ userSettings, handleSettingsSubmit })
{
  return (
    <form className="settings-form" onSubmit={handleSettingsSubmit}>
      <label htmlFor="gender">Gender: </label>
      <select id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        id="age"
        placeholder={userSettings.age}
        required />
      <label htmlFor="height">Height (in.): </label>
      <input
        type="number"
        id="height"
        placeholder={userSettings.height}
        required />
      <label htmlFor="weight">Weight (lbs.): </label>
      <input
        type="number"
        id="weight"
        placeholder={userSettings.weight}
        required />
      <label htmlFor="activityLevel">Activity Level: </label>
      <select id="activityLevel">
        <option value="1">Basal Metabolic Rate (BMR)</option>
        <option value="1.1">Sedantary</option>
        <option value="1.2">Light</option>
        <option value="1.4">Moderate</option>
        <option value="1.6">Active</option>
        <option value="1.8">Very Active</option>
        <option value="2">Extremely Active</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}