
import {useContext} from 'react';
import { AuthContext } from "../../contexts/AuthContext";


export default function Login (){
  const { onLoginSubmit}= useContext(AuthContext)
    return (
        <section id="login">
        <div className="form">
          <h2>Login</h2>
          <form className="login-form" onSubmit={onLoginSubmit}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <button type="submit">login</button>
            <p className="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
    )
}