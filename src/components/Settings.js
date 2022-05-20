import React, { useContext } from 'react';
import SettingsForm from './SettingsForm';
import { MetricsContext } from '../UserContext';
import Metrics from '../Metrics';

export default function Settings({ loggedIn, userInfo })
{
  const { userMetrics, setUserMetrics } = useContext(MetricsContext);

  function handleSubmit(event)
  {
    event.preventDefault();

    setUserMetrics(new Metrics(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value,
      parseFloat(event.target[4].value)
    ));
  }

  if (!loggedIn && !userInfo)
  {
    return (
      <div className="settings-container">
        <h2>You are unique!</h2>
        <h2>Find your caloric needs based on your body and activeness!</h2>
        <img src="https://cdn.pixabay.com/photo/2019/10/18/14/58/remove-4559326_960_720.jpg" alt="measure person" />
      </div>
    )
  }

  return (
    <div className="settings-container">
      <SettingsForm userMetrics={userMetrics} handleSubmit={handleSubmit} />
      <div className="info-container">
        <h4 className="bmr">Basal Metabolic Rate (BMR): {userMetrics.bmr} cals</h4>
        <h4 className="daily-calories">Daily Caloric Needs: {userMetrics.dailyCalories} cals</h4>
      </div>
    </div>
  );
}