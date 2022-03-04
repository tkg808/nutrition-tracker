import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import { useState } from 'react';
import { UserContext } from './UserContext';

export default function App()
{
  const [userFoods, setUserFoods] = useState([]);

  return (
    <div className="App">
      <header>Nutrition Tracker</header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
      <UserContext.Provider value={{ userFoods, setUserFoods }}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </div>
  );
}