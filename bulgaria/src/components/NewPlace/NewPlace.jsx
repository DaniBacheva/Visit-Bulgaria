import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

import * as styles from '../NewPlace/NewPlace.module.css'
import * as placeService from '../../services/placeService'
import { useForm } from "../../hooks/useForm"

export default function NewPlace() {
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  const onAddPlaceSubmit = async (data) => {
       try {
      const newPlace = await placeService.create(data);
      console.log(newPlace)

      navigate('/dashboard')
    }
    catch (error) {
      //error notification
      console.log(error)
    }
  }
  const { values, changeHandler, onSubmit } = useForm({
    name: '',
    location: '',
    imageUrl: '',
    description: '',
    additionalInfo: '',

  }, onAddPlaceSubmit)

  const imageValidate = () => {
    if (values.imageUrl.length === 0 ) {
      setErrors(state => ({
        ...state,
        image: "Image is required",
      }))
    } else {
      if (errors.image) {
        setErrors(state => ({ ...state, image: '' }))
      }
    }
  }

  const nameValidate = () => {
    if (values.name.length === 0) {
      setErrors(state => ({
        ...state,
        name: "Name is required",
      }))
    } else {
      if (errors.name) {
        setErrors(state => ({ ...state, name: '' }))
      }
    }
  }

  const locationValidate = () => {
    if (values.location.length === 0) {
      setErrors(state => ({
        ...state,
        location: "Location is required",
      }))
    } else {
      if (errors.location) {
        setErrors(state => ({ ...state, location: '' }))
      }
    }
  }

  const descriptionValidate = () => {
    if (values.description.length === 0) {
      setErrors(state => ({
        ...state,
        description: "Description is required",
      }))
    } else {
      if (errors.description) {
        setErrors(state => ({ ...state, description: '' }))
      }
    }
  }

  const additionalInfoValidate = () => {
    if (values.additionalInfo.length === 0) {
      setErrors(state => ({
        ...state,
        additionalInfo: "Additional information is required",
      }))
    } else {
      if (errors.additionalInfo) {
        setErrors(state => ({ ...state, additionalInfo: '' }))
      }
    }
  }

  return (
    <section id="create">
      <div className={styles.form}>
        <h2>Add Place</h2>

        <form className={styles.createForm} onSubmit={onSubmit}>

          <input value={values.name}
            onChange={changeHandler}
            onBlur={nameValidate}
            type="text" name="name"
            id="name" placeholder="Name"
            className={errors.name && styles.inputError} />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name}</p>
          )}

          <input value={values.location}
            onChange={changeHandler}
            onBlur={locationValidate}
            type="text" name="location"
            id="location" placeholder="Location"
            className={errors.location && styles.inputError}
          />
          {errors.location && (
            <p className={styles.errorMessage}>{errors.location}</p>
          )}

          <input value={values.imageUrl}
            onChange={changeHandler}
            onBlur={imageValidate}
            type="text" name="imageUrl"
            id="imageUrl" placeholder="Image URL"
            className={errors.image && styles.inputError} />
          {errors.image && (
            <p className={styles.errorMessage}>{errors.image}</p>
          )}

          <textarea value={values.description}
            onChange={changeHandler}
            onBlur={descriptionValidate}
            id="description" name="description"
            placeholder="Description" rows="5" cols="50"
            className={errors.description && styles.inputError}>
          </textarea>
          {errors.description && (
            <p className={styles.errorMessage}>{errors.description}</p>
          )}


          <textarea value={values.additionalInfo}
            onChange={changeHandler}
            onBlur={additionalInfoValidate}
            id="additional-info" name="additionalInfo"
            placeholder="AdditionalInfo" rows="8" cols="50"
            className={errors.additionalInfo && styles.inputError}></textarea>
          {errors.additionalInfo && (
            <p className={styles.errorMessage}>{errors.additionalInfo}</p>
          )}
          <button type="submit" disabled={Object.values(errors).some(x => x)} >Add Place</button>

        </form>
      </div>
    </section>
  )
}// disabled={Object.values(errors).some(x => x)}