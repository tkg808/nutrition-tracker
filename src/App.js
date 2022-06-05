import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Search from './components/Search';
import Signup from './components/Signup';
import Login from './components/Login';
import { FoodsContext, MetricsContext, MacrosContext } from './UserContext';
import Settings from './components/Settings';
import axios from 'axios';
import { NT_API_URL } from './apiConfig';
import Metrics from './classes/Metrics';
import Macros from './classes/Macros';

export default function App()
{
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768)")
  );
  const [showDropdown, setShowDropdown] = useState(false);

  // instantiates contexts.
  const [userFoods, setUserFoods] = useState([]);
  const [userMetrics, setUserMetrics] = useState(null);
  const [userMacros, setUserMacros] = useState(null);

  // Store token in local storage for persistance.
  function handleSetLoggedIn(token)
  {
    setLoggedIn(true);
    localStorage.setItem("token", token);
    getUserInfo();
  }

  function handleLogout()
  {
    setLoggedIn(false);
    setUserInfo(null);
    setUserFoods([]);

    localStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/");
  }

  function handleShowDropdown(event)
  {
    setShowDropdown(!showDropdown);
  }

  function handleClose()
  {
    showDropdown && setShowDropdown(false);
  }

  function getUserInfo()
  {
    axios.get(NT_API_URL + "users/me",
      {
        headers:
        {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      }
    )
      .then((response) => 
      {
        if (response.status === 200)
        {
          return response.data;
        }
        else if (response.status == 401)
        {
          // Forces logout when token is expired.
          handleLogout();
        }
      })
      .then((data) => 
      {
        setUserInfo(data.username);
        setUserMetrics(new Metrics(data.metrics));
        setUserMacros(new Macros(data.macros));
      })
      .catch(console.error);
  }

  function getUserFoods()
  {
    axios.get(NT_API_URL + "foods",
      {
        headers:
        {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      })
      .then((response) => 
      {
        if (response.status === 200)
        {
          return response.data;
        }
      })
      .then((data) => setUserFoods(data))
      .catch(console.error);
  }

  useEffect(() =>
  {
    if (localStorage.getItem("token"))
    {
      setLoggedIn(true);
      getUserInfo();
    }

    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (event) =>
      {
        setMatches(event.matches)
        // Fixes issue of dropdown still showing when screen size is large. 
        !matches && setShowDropdown(false);
      });

  }, []);

  return (
    <div className="App" onClick={handleClose}>
      <Navigation
        loggedIn={loggedIn}
        handleLogout={handleLogout}
        showDropdown={showDropdown}
        handleShowDropdown={handleShowDropdown}
        matches={matches} />
      <MacrosContext.Provider value={{ userMacros, setUserMacros }}>
        <MetricsContext.Provider value={{ userMetrics, setUserMetrics }}>
          <FoodsContext.Provider value={{ userFoods, setUserFoods }}>
            <main>
              <Routes>
                <Route path="/" element={<Home
                  loggedIn={loggedIn}
                  userInfo={userInfo}
                  getUserFoods={getUserFoods}
                />} />
                <Route path="/search" element={<Search
                  loggedIn={loggedIn}
                  userInfo={userInfo}
                />} />
                <Route path="/settings" element={<Settings
                  loggedIn={loggedIn}
                  userInfo={userInfo}
                />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login
                  handleSetLoggedIn={handleSetLoggedIn} />} />
              </Routes>
            </main>
          </FoodsContext.Provider>
        </MetricsContext.Provider>
      </MacrosContext.Provider>
      <footer>
        <h4>© 2022</h4>
        <a href="https://github.com/tkg808" target="_blank" rel="noreferrer noopener">Github</a>
      </footer>
    </div>
  );
}