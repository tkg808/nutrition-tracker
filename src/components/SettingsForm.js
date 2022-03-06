import React from 'react';

export default function SettingsForm({ handleSettingsClick })
{
  return (
    <form className="settings-form" onSubmit={handleSettingsClick}>
      <label htmlFor="settings-gender">Gender: </label>
      <select id="settings-gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="settings-age">Age: </label>
      <input type="number" id="settings-age" placeholder="inches" required />
      <label htmlFor="settings-height">Height: </label>
      <input type="number" id="settings-height" placeholder="inches" required />
      <label htmlFor="settings-weight">Weight: </label>
      <input type="number" id="settings-weight" placeholder="lbs." required />
      <label htmlFor="settings-activity">Activity Level: </label>
      <select id="settings-activity">
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