import { useContext } from 'react';
import {Link} from 'react-router-dom'

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm"

export default function Register () {

  const { onRegisterSubmit } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    rePassword:''
  }, onRegisterSubmit);


    return (
        <section id="register">
        <div className="form">
          <h2>Register</h2>
          <form className="register-form" method='POST' onSubmit={onSubmit}>
            <input
              type="text"
              name="email"
              id="register-email"
              placeholder="email"
              value={values.email}
              onChange={changeHandler}
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="password"
              value={values.password}
              onChange={changeHandler}
            />
            <input
              type="password"
              name="rePassword"
              id="repeatPassword"
              placeholder="repeat password"
              value={values.rePassword}
              onChange={changeHandler}
            />
            <button type="submit">register</button>
            <p className="message">Already registered? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </section>
    )
}