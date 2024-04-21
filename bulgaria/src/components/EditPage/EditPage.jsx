import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as placeService from '../../services/placeService.js'
import *as styles from '../EditPage/EditPage.module.css'
import formValidate from '../../util/errorHelper.js';
import Path from '../../paths.js';

export default function EditPage() {
    const navigate = useNavigate();
    const { placeId } = useParams();
    const [errors, setErrors] = useState({});
    const [place, setPlace] = useState({
        name: '',
        location: '',
        imageUrl: '',
        description: '',
        additionalInfo: '',
    });

    useEffect(() => {
        placeService.getOne(placeId)
            .then(result => {
                setPlace(result);
            })
            .catch(error => {
                console.log(error)
                navigate(Path.NotFound);
            });

    }, [placeId]);

    const onPlaceEditSubmit = async (e) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await placeService.edit(placeId, values);
            navigate(Path.Dashboard);
        }
        catch (error) {
            console.log('There is a problem');
            navigate(Path.NotFound);
        }
    };

    const changeHandler = (e) => {
        setPlace(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validate = (e) => {
        const errors = formValidate(e);
        setErrors(errors);
    };

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Place</h2>
                <form className="edit-form" onSubmit={onPlaceEditSubmit}>
                    <input
                        type="text" name="name" id="name" placeholder="Name"
                        value={place.name}
                        onChange={changeHandler}
                        onBlur={validate}
                        className={errors.name && styles.inputError} />
                    {errors.name && (
                        <p className={styles.errorMessage}>{errors.name}</p>
                    )}

                    <input
                        type="text" name="location" id="location" placeholder="Location"
                        value={place.location}
                        onChange={changeHandler}
                        onBlur={validate}
                        className={errors.location && styles.inputError}
                    />
                    {errors.location && (
                        <p className={styles.errorMessage}>{errors.location}</p>
                    )}

                    <input
                        type="text" name="imageUrl" id="image-url" placeholder="Image URL"
                        value={place.imageUrl}
                        onChange={changeHandler}
                        onBlur={validate}
                        className={errors.imageUrl && styles.inputError} />
                    {errors.imageUrl && (
                        <p className={styles.errorMessage}>{errors.imageUrl}</p>
                    )}

                    <textarea
                        id="description" name="description" placeholder="Description"
                        rows="5" cols="50"
                        value={place.description}
                        onChange={changeHandler}
                        onBlur={validate}
                        className={errors.description && styles.inputError}>
                    </textarea>
                    {errors.description && (
                        <p className={styles.errorMessage}>{errors.description}</p>
                    )}

                    <textarea
                        id="additional-info" name="additionalInfo" placeholder="Additional Info"
                        rows="8" cols="50"
                        value={place.additionalInfo}
                        onChange={changeHandler}
                        onBlur={validate}
                        className={errors.additionalInfo && styles.inputError}></textarea>
                    {errors.additionalInfo && (
                        <p className={styles.errorMessage}>{errors.additionalInfo}</p>
                    )}

                    <button type="submit" disabled={Object.values(errors).length > 0} >Post</button>
                    {Object.values(errors).length > 0 && (
                        <p className={styles.errorMessage}>All fields are required</p>
                    )}
                </form>
            </div>
        </section>
    )
}