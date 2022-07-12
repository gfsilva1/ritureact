import styles from './Modal.module.css'

export function Modal() {
  return(
    <div className={styles.modalBackground}>
      <div className={styles.container}>
        <button> x </button>
        <div className={styles.title}></div>
          <h1>Are you sure?</h1>
        <div className={styles.body}>
          <p>Go on man</p>
        </div>
        <div className={styles.footer}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}
