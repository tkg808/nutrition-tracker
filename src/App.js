import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Search from './components/Search';
import Help from './components/Help';
import Signup from './components/Signup';
import Login from './components/Login';
import { FoodsContext, MetricsContext } from './UserContext';
import Settings from './components/Settings';
import axios from 'axios';
import { NT_API_URL } from './apiConfig';
import Metrics from './Metrics';

export default function App()
{
  const navigate = useNavigate();

  // instantiates contexts.
  const [userFoods, setUserFoods] = useState([]);
  const [userMetrics, setUserMetrics] = useState(new Metrics());

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

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

  function getUserInfo()
  {
    axios.get(NT_API_URL + "users/me",
      {
        headers:
        {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
      .then((response) => response.data)
      .then((data) =>
      {
        setUserInfo(data);
      })
      .catch(console.error);
  }

  function handleLogout()
  {
    setLoggedIn(false);

    localStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/");
  }

  function getUserFoods()
  {
    axios.get(NT_API_URL + "foods",
      {
        headers:
        {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((response) => response.data)
      .then((data) => setUserFoods(data))
      .catch(console.error);
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
      getUserFoods();
    }
  }, []);

  return (
    <div className="App" onClick={handleClose}>
      <Navigation
        showHelp={showHelp}
        handleHelp={handleHelp}
        loggedIn={loggedIn}
        handleLogout={handleLogout} />
      <MetricsContext.Provider value={{ userMetrics, setUserMetrics }}>
        <FoodsContext.Provider value={{ userFoods, setUserFoods }}>
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
        </FoodsContext.Provider>
      </MetricsContext.Provider>

      <footer>
        <h4>© 2022</h4>
        <a href="https://github.com/tkg808" target="_blank" rel="noreferrer noopener">Github</a>
      </footer>
    </div>
  );
}