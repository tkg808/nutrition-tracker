import { Link } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';

export default function Navigation({ showHelp, handleHelp, loggedIn, handleLogout })
{
  return (
    <header className="header-container">
      <div className="brand-container">
        <img className="brand-image" src="https://cdn.pixabay.com/photo/2013/07/12/19/17/apple-154492_1280.png" alt="apple-a-day" />
        <h1 className="brand-name">Nutrition Tracker</h1>
      </div>

      <nav className="nav-container">
        <div className="function-links links-container">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/help">Help</Link>
        </div>
        <div className="user-links links-container">
          {
            loggedIn ?
              (
                <Link to="/" onClick={handleLogout}>Log Out</Link>
              ) :
              (
                <>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login">Log In</Link>
                </>
              )
          }

        </div>
      </nav>
      {/* <FaRegQuestionCircle
        className="icon"
        id="help-icon"
        onClick={handleHelp}
        style={showHelp ? { color: "red" } : { color: "green" }} />

      {!showHelp ? null : <Help handleHelp={handleHelp} />} */}
    </header>
  )
}