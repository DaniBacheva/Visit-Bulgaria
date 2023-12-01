import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'

import AuthContext from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm"
import * as styles from '../Login/Login.module.css'
import formValidate from '../common/errorHelper.js';


export default function Login() {
  const { onLoginSubmit, error } = useContext(AuthContext);
  const [errors, setErrors] = useState({})
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: ''
  }, onLoginSubmit);

  const validate = (e)=> {
    const errors = formValidate(e);
    setErrors(errors)
    console.log(errors)
  }

  return (
    <section className="login">
      <div className={styles.loginPage}>

        <form className={styles.form} method="POST" onSubmit={onSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            name="email"
            id="email" placeholder="email"
            value={values.email}
            onChange={changeHandler}
            onBlur={validate}
            className={errors?.email && styles.inputError} />
          {errors?.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={changeHandler}
            onBlur={validate}
            className={errors.password && styles.inputError} />
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password}</p>
          )}

          <button type="submit">login</button>
          {error.login && (
            <p className={styles.errorMessage}>{error.login}</p>
          )}
          <p className={styles.message}>
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  )
}