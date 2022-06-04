import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Navigation({ loggedIn, handleLogout, showDropdown, handleShowDropdown, matches })
{
  const links = useMemo(() =>
  {
    let arr = [
      <Link key="1" to="/">Home</Link>,
      <Link key="2" to="/search">Search</Link>,
      <Link key="3" to="/settings">Settings</Link>
    ];

    if (loggedIn)
    {
      arr.push(<Link key="4" to="/" onClick={handleLogout}>Log Out</Link>)
    }
    else
    {
      arr.push(<Link key="5" to="/signup">Sign Up</Link>)
      arr.push(<Link key="6" to="/login">Log In</Link>)
    }

    return arr
  }, [loggedIn]);

  return (
    <header className="header-container">
      <div className="brand-container">
        <img className="brand-image" src="https://cdn.pixabay.com/photo/2013/07/12/19/17/apple-154492_1280.png" alt="apple-a-day" />
        <h1 className="brand-name">Nutrition Tracker</h1>
      </div>
      <nav className="nav-container">
        {matches &&
          <div className="links-container">
            {
              links.map((link) => link)
            }
          </div>
        }

        {!matches &&
          <FaBars
            id="bars-icon"
            size={28}
            onClick={handleShowDropdown}
          />
        }
        {showDropdown &&
          <div className={"dropdown-container" + (showDropdown && " active")}>
            {
              links.map((link) => link)
            }
          </div>
        }
      </nav>
    </header >
  )
}