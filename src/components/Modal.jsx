import styles from './Modal.module.css'

export function Modal( ){
  return(
    <div className={styles.modalBackground}>
      <div> className={styles.modalContainer}
        <button> X </button>
        <div className={styles.title}>
          <h1>Movie Title</h1>
        </div>
        <div className={styles.body}>
          <h1>Movie image</h1>
        </div>
      </div>
    </div>
  )
}
