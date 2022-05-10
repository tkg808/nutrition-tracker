import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Search from './components/Search';
import Help from './components/Help';
import Signup from './components/Signup';
import Login from './components/Login';
import { UserContext } from './UserContext';
import Settings from './components/Settings';
import { UserSettings } from './UserSettings';
import axios from 'axios';
import { NT_API_URL } from './apiConfig';

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

  const navigate = useNavigate();

  // instantiates contexts.
  const [userFoods, setUserFoods] = useState([]);
  const [userSettings, setUserSettings] = useState(initialSettings);

  const [loggedIn, setLoggedIn] = useState(false);

  // toggles help window.
  const [showHelp, setShowHelp] = useState(false);

  // help-icon click event.
  function handleHelp()
  {
    setShowHelp(!showHelp);
  }

  // Store token in local storage for persistance.
  function handleSetLoggedIn(token)
  {
    setLoggedIn(true);
    localStorage.setItem("token", token);
    getUserInfo();
  }

  /* IN WORKING PROGRESS */
  function getUserInfo()
  {
    axios.get(NT_API_URL + "users/me", localStorage.getItem("token"))
      .then((response) => console.log(response))
      .catch(console.error);
  }
  /* IN WORKING PROGRESS */

  function handleLogout()
  {
    setLoggedIn(false);

    localStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/");
  }

  // click anywhere in app to close help window.
  function handleClose()
  {
    if (showHelp)
    {
      setShowHelp(false);
    }
  }

  useEffect(() =>
  {
    if (localStorage.getItem("token"))
    {
      setLoggedIn(true);
      getUserInfo();
    }
  }, []);

  return (
    <div className="App" onClick={handleClose}>
      <Navigation
        showHelp={showHelp}
        handleHelp={handleHelp}
        loggedIn={loggedIn}
        handleLogout={handleLogout} />
      <UserSettings.Provider value={{ userSettings, setUserSettings }}>
        <UserContext.Provider value={{ userFoods, setUserFoods }}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login
                handleSetLoggedIn={handleSetLoggedIn} />} />
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