import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Help from './components/Help';
import Navigation from './components/Navigation';
import { useState } from 'react';
import { UserContext } from './UserContext';
import Settings from './components/Settings';
import { UserSettings } from './UserSettings';

export default function App()
{
  // instantiates UserSettings context.
  const initialSettings =
  {
    gender: "male",
    age: 0,
    height: 0,
    weight: 0,
    activityLevel: 1,
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
      return Math.round((this.bmr() * this.activityLevel));
    }
  };

  // instantiates contexts.
  const [userFoods, setUserFoods] = useState([]);
  const [userSettings, setUserSettings] = useState(initialSettings);

  // toggles help window.
  const [showHelp, setShowHelp] = useState(false);

  // help-icon click event.
  function handleHelp()
  {
    setShowHelp(!showHelp);
  }

  // click anywhere in app to close help window.
  function handleClose()
  {
    if (showHelp)
    {
      setShowHelp(false);
    }
  }

  return (
    <div className="App" onClick={handleClose}>
      <Navigation
        showHelp={showHelp}
        handleHelp={handleHelp} />
      <UserSettings.Provider value={{ userSettings, setUserSettings }}>
        <UserContext.Provider value={{ userFoods, setUserFoods }}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </UserContext.Provider>
      </UserSettings.Provider>

      <footer>
        <h4>© 2022</h4>
        <a href="https://github.com/tkg808" target="_blank" rel="noreferrer noopener">Github</a>
      </footer>
    </div>
  );
}