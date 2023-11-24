import { useState } from 'react';

import * as styles from '../NewPlace/NewPlace.module.css'
import { usePlaceContext } from "../../contexts/PlaceContext"
import { useForm } from "../../hooks/useForm"

export default function NewPlace() {
  const { onAddPlaceSubmit } = usePlaceContext()
  const [errors, setErrors] = useState({})
  const { values, changeHandler, onSubmit } = useForm({
    name: '',
    location: '',
    imageUrl: '',
    description: '',
    additionalInfo: '',

  }, onAddPlaceSubmit)

  const imageValidate = () => {
    if (values.imageUrl.length < 6) {
      setErrors(state => ({
        ...state,
        image: "Image should be at least 6 symbols",
      }))
    } else {
      if (errors.image) {
        setErrors(state => ({ ...state, image: '' }))
      }
    }
  }

  const nameValidate = () => {
    if (values.name.length < 6) {
      setErrors(state => ({
        ...state,
        name: "Name should be at least 6 symbols",
      }))
    } else {
      if (errors.name) {
        setErrors(state => ({ ...state, name: '' }))
      }
    }
  }

  const locationValidate = () => {
    if (values.location.length < 10) {
      setErrors(state => ({
        ...state,
        location: "Location should be at least 10 symbols",
      }))
    } else {
      if (errors.location) {
        setErrors(state => ({ ...state, location: '' }))
      }
    }
  }

  const descriptionValidate = () => {
    if (values.description.length < 15) {
      setErrors(state => ({
        ...state,
        description: "Description should be at least 15 symbols",
      }))
    } else {
      if (errors.description) {
        setErrors(state => ({ ...state, description: '' }))
      }
    }
  }

  const additionalInfoValidate = () => {
    if (values.additionalInfo.length < 20) {
      setErrors(state => ({
        ...state,
        additionalInfo: "Additional information should be at least 20 symbols",
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
          <button type="submit" disabled={Object.values(errors).some(x=>x)} >Add Place</button>

        </form>
      </div>
    </section>
  )
}