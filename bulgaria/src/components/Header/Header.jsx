import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

export default function Header() {
  const { isAuthenticated , userEmail} = useContext(AuthContext)
  return (
    <header>

      <Link id="logo" to="/"
      ><img id="logo-img" src="../images/bg-logo.png" alt="bg-logo"
        /></Link>
      <nav>
        <div>
         
          <Link to="/">HOME</Link>
          <Link to="/dashboard">DASHBOARD</Link>

        </div>
        {isAuthenticated && (
          <div className="user">
             <span>Hi, {userEmail}</span>
            <Link to="/new-place">NEW PLACE</Link>
            <Link to="/top-rated">TOP RATED</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/logout">LOGOUT</Link>
          </div>
        )}
        {!isAuthenticated && (
          <div className="guest">
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
          </div>
        )}
      </nav>
    </header>
  )
}