import { useForm } from "../../../hooks/useForm";

export default function AddComment({
    onCommentSubmit,
}) {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit)

    return (
        <>
            <article className="create-comment">
               
                <form className="form" onSubmit={onSubmit}>
                     <label>Add new comment:</label>
                    <textarea name="comment" 
                    placeholder="Comment......" 
                    value={values.comment} 
                    onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    )
}