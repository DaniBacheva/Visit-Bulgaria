import { Link } from 'react-router-dom';
import { useContext } from 'react';

import * as styles from '../Header/Header.module.css';
import { AuthContext } from '../../contexts/AuthContext';
import Path from '../../paths';

export default function Header() {
  const { isAuthenticated, email } = useContext(AuthContext);
  return (
    <header>
      <Link className={styles.logo} to={Path.Home}
      ><img className={styles.logoImg} src="../../../images/bg-logo.png" alt="bg-logo"
        /></Link>
      <nav>
        <div>
          {isAuthenticated && (
            <span>Hi, {email}</span>)}

          <Link to={Path.Dashboard}>DASHBOARD</Link>

        </div>
        {isAuthenticated && (
          <div className={styles.user}>
            <Link to={Path.NewPlace}>NEW PLACE</Link>
            <Link to={Path.Profile}>PROFILE</Link>
            <Link to={Path.Logout}>LOGOUT</Link>
          </div>
        )}
        {!isAuthenticated && (
          <div className={styles.guest}>
            <Link to={Path.Login}>LOGIN</Link>
            <Link to={Path.Register}>REGISTER</Link>
          </div>
        )}
      </nav>
    </header>
  )
}