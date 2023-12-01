import { useState } from "react";

import { useForm } from "../../../hooks/useForm";

import *as styles from "../AddComment/AddComment.module.css"

export default function AddComment({
    onCommentSubmit,
}) {
    const [error, setError] = useState({})
    const [notValidate, setNotValidate] = useState(false)
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit)

    const validate = (e) => {
        if (values.comment.length === 0) {
            setError(state => ({
                ...state,
                comment: "Text is required"
            }))
            setNotValidate(true);
                        console.log({ error });
        }
        else {
            setError({});
            setNotValidate(false)
          }

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
                    <input className="btn submit" disabled={notValidate} type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    )
}