import styles from './Banner.module.css'

export function Banner() {
  return (
    <div>
      <div className={styles.banner}>
        <h1>FEEL THE SENSATION OF <strong>CABOCLINHO</strong> ANYWHERE</h1>
        <div className={styles.button}>
          <p>Join Now</p>
          <p>Learn more</p>
        </div>
      </div>
    </div>
  )

}
