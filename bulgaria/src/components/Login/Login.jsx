import {Link} from 'react-router-dom'
import { useContext } from 'react';

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm"


export default function Login() {

  const { onLoginSubmit } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: ''
  }, onLoginSubmit);

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            id="email" placeholder="email"
            value={values.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={changeHandler}
          />
          <button type="submit">login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  )
}