import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

import  AuthContext  from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import * as styles from '../Register/register.module.css';
import formValidate from '../../util/errorHelper.js';

export default function Register() {
  const [errors, setErrors] = useState({});
  const {onRegisterSubmit, error} = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    rePassword: ''
  }, onRegisterSubmit);

  const validate = (e)=> {
    const errors = formValidate(e);
    setErrors(errors)
    console.log(errors)
  };

    const rePasswordValidate = () => {
    if (values.rePassword.length == 0) {
      setErrors(state => ({
        ...state,
        rePassword: "Repeat Password is required",
      }))
    }
    else if (values.rePassword !==values.password) {
      setErrors(state => ({
        ...state,
        rePassword: "The password do no match",
      }))
    } else {
      if (errors.rePassword) {
        setErrors(state => ({ ...state, rePassword: '' }))
      }
    }
  };

   return (
    <section id="register">
      <div className={styles.form}>
        <h2>Register</h2>
        <form className={styles.registerForm} method='POST' onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
            value={values.email}
            onChange={changeHandler}
            onBlur={validate}
            className={errors.email && styles.inputError} />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
            value={values.password}
            onChange={changeHandler}
            onBlur={validate}
            className={errors.password && styles.inputError} />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password}</p>
            )}
         
          <input
            type="password"
            name="rePassword"
            id="repeatPassword"
            placeholder="repeat password"
            value={values.rePassword}
            onChange={changeHandler}
            onBlur={rePasswordValidate}
            className={errors.rePassword && styles.inputError} />
            {errors.rePassword && (
              <p className={styles.errorMessage}>{errors.rePassword}</p>
            )}
         
          <button type="submit" >register</button>
          {<error className="register"></error> && (
            <p className={styles.errorMessage}>{error.register}</p>
          )}
          <p className={styles.message}>Already registered? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </section>
  )
}