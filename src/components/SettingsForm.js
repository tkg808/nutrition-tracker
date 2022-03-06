import React from 'react';

export default function SettingsForm()
{
  return (
    <form action="settings-form">
      <label htmlFor="form-height">Height: </label>
      <input type="number" id="form-height" placeholder="inches" required />
      <label htmlFor="form-weight">Weight: </label>
      <input type="number" id="form-weight" placeholder="lbs." required />
      <label htmlFor="form-activity">Activity Level: </label>
      <select id="form-activity" required>
        <option value="1">Basal Metabolic Rate (BMR)</option>
        <option value="1.1">Sedantary</option>
        <option value="1.2">Light</option>
        <option value="1.4">Moderate</option>
        <option value="1.6">Active</option>
        <option value="1.8">Very Active</option>
        <option value="2">Extremely Active</option>
      </select>
    </form>
  )
}