export default function Header (){
    return (
        <header>
        
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/bg-logo.png" alt="bg-logo"
        /></a>
        <nav>
          <div>
          <a href="#">HOME</a>
            <a href="#">DASHBOARD</a>

          </div>
         
          <div className="user">
            <a href="#">ADD PLACE</a>
            <a href="#">PROFILE</a>  
            <a href="#">LOGOUT</a>
          </div>
         
          <div className="guest">
            <a href="#">LOGIN</a>
            <a href="#">REGISTER</a>
            
          </div>
        </nav>
      </header>
    )
}