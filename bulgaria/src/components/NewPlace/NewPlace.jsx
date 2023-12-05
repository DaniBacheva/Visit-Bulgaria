import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from '../NewPlace/NewPlace.module.css';
import * as placeService from '../../services/placeService';
import { useForm } from "../../hooks/useForm";
import formValidate from '../../util/errorHelper.js';

export default function NewPlace() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (e) => {
    const errors = formValidate(e);
    setErrors(errors);
    console.log(Object.values(errors));
  }
  const onAddPlaceSubmit = async (data) => {
    try {
      await placeService.create(data);

      navigate('/dashboard');
    }
    catch (error) {
      setErrors(state => ({
        ...state,
        addPlace: error.message,
      }));
      console.log(error.addPlace);
      navigate('/404')
    }
  };

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

          <input type="text" name="name" id="name" placeholder="Name"
            onChange={changeHandler}
            onBlur={validate}
            value={values.name}
            className={errors.name && styles.inputError} />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name}</p>
          )}

          <input type="text" name="location" id="location" placeholder="Location"
            onChange={changeHandler}
            onBlur={validate}
            value={values.location}
            className={errors.location && styles.inputError}
          />
          {errors.location && (
            <p className={styles.errorMessage}>{errors.location}</p>
          )}

          <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL"
            onChange={changeHandler}
            onBlur={validate}
            value={values.imageUrl}
            className={errors.imageUrl && styles.inputError} />
          {errors.imageUrl && (
            <p className={styles.errorMessage}>{errors.imageUrl}</p>
          )}

          <textarea id="description" name="description" placeholder="Description" rows="5" cols="50"
            onChange={changeHandler}
            onBlur={validate}
            value={values.description}
            className={errors.description && styles.inputError}>
          </textarea>
          {errors.description && (
            <p className={styles.errorMessage}>{errors.description}</p>
          )}

          <textarea id="additional-info" name="additionalInfo" placeholder="AdditionalInfo" rows="8" cols="50"
            onChange={changeHandler}
            onBlur={validate}
            value={values.additionalInfo}
            className={errors.additionalInfo && styles.inputError}></textarea>
          {errors.additionalInfo && (
            <p className={styles.errorMessage}>{errors.additionalInfo}</p>
          )}
          <button type="submit" disabled={Object.values(errors).length > 0} >Add Place</button>
          {Object.values(errors).length > 0 && (
            <p className={styles.errorMessage}>All fields are required</p>
          )}
        </form>
      </div>
    </section>
  )
}

