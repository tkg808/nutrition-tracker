import React from 'react';

export default function SettingsForm({ userMetrics, handleSubmit })
{
  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <label htmlFor="gender">Gender: </label>
      <select id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        id="age"
        placeholder={userMetrics.age}
        required />
      <label htmlFor="height">Height (in.): </label>
      <input
        type="number"
        id="height"
        placeholder={userMetrics.height}
        required />
      <label htmlFor="weight">Weight (lbs.): </label>
      <input
        type="number"
        id="weight"
        placeholder={userMetrics.weight}
        required />
      <label htmlFor="activityLevel">Activity Level: </label>
      <select id="activityLevel">
        <option value="1">Basal Metabolic Rate (BMR)</option>
        <option value="1.2">Sedantary</option>
        <option value="1.35">Light</option>
        <option value="1.5">Moderate</option>
        <option value="1.65">Active</option>
        <option value="1.8">Very Active</option>
        <option value="1.95">Extremely Active</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}