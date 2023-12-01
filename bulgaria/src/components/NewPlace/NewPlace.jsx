import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from '../NewPlace/NewPlace.module.css'
import * as placeService from '../../services/placeService'
import { useForm } from "../../hooks/useForm"
import formValidate from '../common/errorHelper.js';

export default function NewPlace() {
  const [errors, setErrors] = useState({})
  const [notValidate, setNotValidate] = useState(false)
  const navigate = useNavigate();

  const validate = (e) => {
    const errors = formValidate(e);
    setErrors(errors)
    console.log({ errors })

    if (Object.values(errors).some(e => e)) {
      setNotValidate(true)
    }
  }

  const onAddPlaceSubmit = async (data) => {
    try {
      const newPlace = await placeService.create(data);
      //console.log(newPlace)

      navigate('/dashboard')
    }
    catch (error) {

      console.log(error)
    }
  }
  const { values, changeHandler, onSubmit } = useForm({
    name: '',
    location: '',
    imageUrl: '',
    description: '',
    additionalInfo: '',

  }, onAddPlaceSubmit);




  return (
    <section id="create">
      <div className={styles.form}>
        <h2>Add Place</h2>

        <form className={styles.createForm} onSubmit={onSubmit}>

          <input value={values.name}
            onChange={changeHandler}
            onBlur={validate}
            type="text" name="name"
            id="name" placeholder="Name"
            className={errors.name && styles.inputError} />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name}</p>
          )}

          <input value={values.location}
            onChange={changeHandler}
            onBlur={validate}
            type="text" name="location"
            id="location" placeholder="Location"
            className={errors.location && styles.inputError}
          />
          {errors.location && (
            <p className={styles.errorMessage}>{errors.location}</p>
          )}

          <input value={values.imageUrl}
            onChange={changeHandler}
            onBlur={validate}
            type="text" name="imageUrl"
            id="imageUrl" placeholder="Image URL"
            className={errors.image && styles.inputError} />
          {errors.image && (
            <p className={styles.errorMessage}>{errors.image}</p>
          )}

          <textarea value={values.description}
            onChange={changeHandler}
            onBlur={validate}
            id="description" name="description"
            placeholder="Description" rows="5" cols="50"
            className={errors.description && styles.inputError}>
          </textarea>
          {errors.description && (
            <p className={styles.errorMessage}>{errors.description}</p>
          )}


          <textarea value={values.additionalInfo}
            onChange={changeHandler}
            onBlur={validate}
            id="additional-info" name="additionalInfo"
            placeholder="AdditionalInfo" rows="8" cols="50"
            className={errors.additionalInfo && styles.inputError}></textarea>
          {errors.additionalInfo && (
            <p className={styles.errorMessage}>{errors.additionalInfo}</p>
          )}
          <button type="submit" disabled={notValidate} >Add Place</button>
        </form>
      </div>
    </section>
  )
}

//.some(x => x)