import styles from './Banner.module.css'

export function Banner() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.slogan}>
          <h3>FEEL THE SENSATION OF</h3>
          <h3><strong>CABOCLINHO</strong> ANYWHERE</h3>
        </div>
        <div>
          <p>Wide selection of RITUS with the best audio and visual quality </p>
        </div>
        <div className={styles.button}>
          <button>Join Now</button>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  )

}
