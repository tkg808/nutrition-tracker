import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import { useState, useEFfect, useEffect } from 'react';
import { UserContext } from './UserContext';
import { FaRegQuestionCircle, FaGithub } from 'react-icons/fa';
import Help from './components/Help';
import Settings from './components/Settings';
import { UserSettings } from './UserSettings';

export default function App()
{
  const [userFoods, setUserFoods] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  function handleHelp()
  {
    setShowHelp(!showHelp);
  }

  function handleClose()
  {
    if (showHelp)
    {
      setShowHelp(false);
    }
  }

  useEffect(() =>
  {
    setShowHelp(false);
  }, [userFoods])

  return (
    <div className="App" onClick={handleClose}>
      <header>
        <img className="apple" src="https://cdn.pixabay.com/photo/2013/07/12/19/17/apple-154492_1280.png" alt="apple-a-day" />
        <h1 className="app-name">Nutrition Tracker</h1>
      </header>
      <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/settings">Settings</Link>
        </div>
        <FaRegQuestionCircle
          id="help-icon"
          onClick={handleHelp}
          style={showHelp ? { color: "red" } : { color: "green" }} />
      </nav>
      <UserSettings.Provider value={UserSettings}>
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
      {!showHelp ? null : <Help handleHelp={handleHelp} />}
      <footer>
        <h4>© 2022</h4>
        <a href="https://github.com/tkg808" target="_blank" rel="noreferrer noopener">Github</a>
      </footer>
    </div>
  );
}