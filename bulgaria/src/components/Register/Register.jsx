import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

import  AuthContext  from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm"
import * as styles from '../Register/register.module.css'

export default function Register() {
  const [errors, setErrors] = useState({})
  const { onRegisterSubmit } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    rePassword: ''
  }, onRegisterSubmit);

  const emailValidate = () => {
    if (values.email.length == 0) {
      setErrors(state => ({
        ...state,
        email: "Email is required",
      }))
    }
 
    else {
      if (errors.email) {
        setErrors(state => ({ ...state, email: '' }))
      }
    }
  }

  const passwordValidate = () => {
    if (values.password.length == 0) {
      setErrors(state => ({
        ...state,
        password: "Password is required",
      }))
    }
  else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }))
      }
    }
  }
  
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
  }

  const fieldsValidate = () => {
    if (values.rePassword.length == 0|| values.password.length==0 || values.email==0) {
      setErrors(state => ({
        ...state,
        fields: "All fields is required",
      }))
    }
      else {
      if (errors.fields) {
        setErrors(state => ({ ...state, fields: '' }))
      }
    }
  }

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
            onBlur={emailValidate}
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
            onBlur={passwordValidate}
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
         
          <button type="submit"
          onMouseOver={fieldsValidate}  >register</button>
            {errors.fields && (
              <p className={styles.errorMessage}>{errors.fields}</p>
            )}
          <p className={styles.message}>Already registered? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </section>
  )
}