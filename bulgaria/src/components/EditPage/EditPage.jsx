import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { placeServiceFactory } from "../../services/placeService";
import { usePlaceContext } from '../../contexts/PlaceContext';
import *as styles from '../EditPage/EditPage.module.css'


export default function EditPage() {
  const { onPlaceEditSubmit } = usePlaceContext()
  const { placeId } = useParams();
  const placeService = useService(placeServiceFactory);
  const [errors, setErrors] = useState({})
  const { values, changeHandler, onSubmit, changeValues } = useForm({

    _id: '',
    name: '',
    location: '',
    imageUrl: '',
    description: '',
    additionalInfo: '',

  }, onPlaceEditSubmit)

  //console.log(values)

  useEffect(() => {
    placeService.getOne(placeId)
      .then(result => {
        changeValues(result);
      });

  }, [placeId])

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
      if (errors.location) {
        setErrors(state => ({ ...state, location: '' }))
      }
    }
  }

  return (
    <section id="edit">
      <div className="form">
        <h2>Edit Fact</h2>
        <form className="edit-form" method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={changeHandler}
            onBlur={nameValidate}
            className={errors.name && styles.inputError} />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name}</p>
          )}

          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={values.location}
            onChange={changeHandler}
            onBlur={locationValidate}
            className={errors.location && styles.inputError}
          />
          {errors.location && (
            <p className={styles.errorMessage}>{errors.location}</p>
          )}

          <input
            type="text"
            name="imageUrl"
            id="image-url"
            placeholder="Image URL"
            value={values.imageUrl}
            onChange={changeHandler}
            onBlur={imageValidate}
            className={errors.image && styles.inputError} />
          {errors.image && (
            <p className={styles.errorMessage}>{errors.image}</p>
          )}

          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="5"
            cols="50"
            value={values.description}
            onChange={changeHandler}
            onBlur={descriptionValidate}
            className={errors.description && styles.inputError}>
            </textarea>
            {errors.description && (
              <p className={styles.errorMessage}>{errors.description}</p>
            )}
          
          <textarea
            id="additional-info"
            name="additionalInfo"
            placeholder="Additional Info"
            rows="8"
            cols="50"
            value={values.additionalInfo}
            onChange={changeHandler}
            onBlur={additionalInfoValidate}
            className={errors.additionalInfo && styles.inputError}></textarea>
          {errors.additionalInfo && (
            <p className={styles.errorMessage}>{errors.additionalInfo}</p>
          )}
       
          <button type="submit">Post</button>
        </form>
      </div>
    </section>
  )
}