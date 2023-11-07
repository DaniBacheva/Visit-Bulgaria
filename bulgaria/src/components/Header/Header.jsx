import { Link}from 'react-router-dom'

export default function Header (){
    return (
        <header>
        
        <Link id="logo" to="/"
          ><img id="logo-img" src="../images/bg-logo.png" alt="bg-logo"
        /></Link>
        <nav>
          <div>
            <span>Hi, USer</span>
          <Link to="/">HOME</Link>
            <Link to="/dashboard">DASHBOARD</Link>

          </div>
         
          <div className="user">
            
            <Link to="/new-place">NEW PLACE</Link>
            <Link to="/top-rated">TOP RATED</Link>
            <Link to="/profile">PROFILE</Link>  
            
            <Link to="/logout">LOGOUT</Link>

          </div>
         
          <div className="guest">
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
            
          </div>
        </nav>
      </header>
    )
}