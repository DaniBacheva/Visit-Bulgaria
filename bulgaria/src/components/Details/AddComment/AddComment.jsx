import { useState } from "react";
import { useForm } from "../../../hooks/useForm";

import * as styles from "../AddComment/AddComment.module.css";
import formValidate from '../../../util/errorHelper.js';

export default function AddComment({
    onCommentSubmit,
}) {
    const [error, setErrors] = useState({})
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    const validate = (e) => {
        const errors = formValidate(e);
        setErrors(errors);
        console.log(Object.values(errors));
    }

    return (
        <>
            <article className="create-comment">
                <form className="form" onSubmit={onSubmit}>
                    <label>Add new comment:</label>
                    <textarea name="comment"
                        placeholder="Comment......"
                        value={values.comment}
                        onBlur={validate}
                        onChange={changeHandler}></textarea>
                    {error.comment && (
                        <p className={styles.errorMessage}>{error.comment}</p>
                    )}
                    <button type="submit" disabled={Object.values(error).length !== 0}>Add Comment</button>
                </form>
            </article>
        </>
    )
}