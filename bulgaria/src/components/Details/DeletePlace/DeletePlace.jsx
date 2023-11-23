import *as styles from "../DeletePlace/DeletePlace.module.css"

export default function DeletePlace ({
    onClose,
    onDelete
}){
    return (
        <>
        <div className={styles.modal}>
  <form className={styles.modalContent} action="/action_page.php">
    <div className="container">
      <h1>Delete Place</h1>
      <p>Are you sure you want to delete your place?</p>

      <div className={styles.clearfix}>
        <button type="button" className={styles.cancelbtn} onClick={onClose}>Cancel</button>
        <button type="button" className={styles.deletebtn} onClick={onDelete}>Delete</button>
      </div>
    </div>
  </form>
</div>
</>
    )
}