import *as styles from "../DeletePlace/DeletePlace.module.css"

export default function DeletePlace ({
    onClose,
    onDelete,
    values
}){
    return (
        <>
        <div className={styles.modal}>
  <form className={styles.modalContent} action="/action_page.php">
    <div className={styles.comfirm}>      
      <img className={styles.detailsImg} src={values.imageUrl} />
      <h1>Delete Place</h1>
        <h4>Are you sure you want to {values.name}?</h4>

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