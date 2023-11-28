import { Link } from 'react-router-dom'
import { useContext } from 'react'

import * as styles from '../Header/Header.module.css'

import { AuthContext } from '../../contexts/AuthContext'

export default function Header() {
  const { isAuthenticated, email } = useContext(AuthContext)
  return (
    <header>

      <Link className={styles.logo} to="/"
      ><img className={styles.logoImg} src="../../../images/bg-logo.png" alt="bg-logo"
        /></Link>
      <nav>
        <div>
          {isAuthenticated && (
            <span>Hi, {email}</span>)}

          <Link to="/dashboard">DASHBOARD</Link>

        </div>
        {isAuthenticated && (
          <div className={styles.user}>
            <Link to="/new-place">NEW PLACE</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/logout">LOGOUT</Link>
          </div>
        )}
        {!isAuthenticated && (
          <div className={styles.guest}>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
          </div>
        )}
      </nav>
    </header>
  )
}