import React, { useContext } from 'react';
import Metrics from '../classes/Metrics';
import { MetricsContext, MacrosContext } from '../UserContext';
import MetricsForm from './MetricsForm';
import Macros from '../classes/Macros';
import MacrosForm from './MacrosForm';

export default function Settings({ loggedIn, userInfo })
{
  const { userMetrics, setUserMetrics } = useContext(MetricsContext);
  const { userMacros, setUserMacros } = useContext(MacrosContext);

  function handleSubmitMetrics(event)
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

  function handleSubmitMacros(event)
  {
    event.preventDefault();

    setUserMacros(new Macros(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
    ));
  }

  if (!loggedIn && !userInfo)
  {
    return (
      <div className="settings-container">
        <h2>You are unique!</h2>
        <p>Find your caloric needs based on your body and activeness!</p>
        <img className="settings-image" src="https://cdn.pixabay.com/photo/2019/10/18/14/58/remove-4559326_960_720.jpg" alt="measure person" />
      </div>
    )
  }

  return (
    <div className="settings-container">
      <div className="metrics-container">
        <h2>Metrics</h2>
        <MetricsForm userMetrics={userMetrics} handleSubmit={handleSubmitMetrics} />
        <div className="info-container">
          <h4 className="bmr">Basal Metabolic Rate (BMR): {userMetrics ? userMetrics.getBMR() : "~"} cals</h4>
          <h4 className="daily-calories">Daily Caloric Needs: {userMetrics ? userMetrics.getDailyCalories() : "~"} cals</h4>
        </div>
      </div>

      <div className="macros-container">
        <h2>Macros</h2>
        <MacrosForm userMacros={userMacros} handleSubmit={handleSubmitMacros} />
      </div>
    </div>
  );
}