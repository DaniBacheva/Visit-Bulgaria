import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useForm } from "../../hooks/useForm";
import * as placeService from '../../services/placeService'
import *as styles from '../EditPage/EditPage.module.css'
import formValidate from '../common/errorHelper.js';

export default function EditPage() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    placeService.getOne(placeId)
      .then(result => {
        changeValues(result);
      });

  }, [placeId]);

  const validate = (e) => {
    const errors = formValidate(e);
    setErrors(errors)
    console.log(Object.values(errors))
  
  }

  const onPlaceEditSubmit = async (data) => {
    await placeService.edit(data._id, data);
    //console.log(data)

    navigate(`/dashboard/${data._id}`);
  }
  const { values, changeHandler, onSubmit, changeValues } = useForm({

    _id: '',
    name: '',
    location: '',
    imageUrl: '',
    description: '',
    additionalInfo: '',

  }, onPlaceEditSubmit)

  //console.log(values)

  return (
    <section id="edit">
      <div className="form">
        <h2>Edit Place</h2>
        <form className="edit-form" method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={changeHandler}
            onBlur={validate}
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
            onBlur={validate}
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
            onBlur={validate}
            className={errors.imageUrl && styles.inputError} />
          {errors.imageUrl && (
            <p className={styles.errorMessage}>{errors.imageUrl}</p>
          )}

          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="5"
            cols="50"
            value={values.description}
            onChange={changeHandler}
            onBlur={validate}
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
            onBlur={validate}
            className={errors.additionalInfo && styles.inputError}></textarea>
          {errors.additionalInfo && (
            <p className={styles.errorMessage}>{errors.additionalInfo}</p>
          )}

          <button type="submit" disabled={Object.values(errors).length>0} >Post</button>
          {Object.values(errors).length>0 && (
            <p className={styles.errorMessage}>All fields are required</p>
          )}
        </form>
      </div>
    </section>
  )
}