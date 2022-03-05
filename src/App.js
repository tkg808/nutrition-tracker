import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import { useState } from 'react';
import { UserContext } from './UserContext';
import { FaRegQuestionCircle } from 'react-icons/fa';
import Help from './components/Help';

export default function App()
{
  const [userFoods, setUserFoods] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  function handleHelp()
  {
    setShowHelp(!showHelp);
  }

  return (
    <div className="App">
      <header>
        <img className="apple" src="https://cdn.pixabay.com/photo/2013/07/12/19/17/apple-154492_1280.png" alt="apple-a-day" />
        <h1 className="app-name">Nutrition Tracker</h1>
      </header>
      <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </div>
        <FaRegQuestionCircle id="help-icon" onClick={handleHelp} />
      </nav>
      <UserContext.Provider value={{ userFoods, setUserFoods }}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </UserContext.Provider>
      {!showHelp ? null : <Help handleHelp={handleHelp} />}
    </div>
  );
}