import styles from './Carousel.module.css'
import jongo from '../assets/jongo.png'
import pezinho from '../assets/pezinho.png'
import maracatu from '../assets/maracatu.png'
import cururu from '../assets/cururu.png'
import tecnobrega from '../assets/tecnobrega.png'




export function Carousel() {
  return(
    <div>
      <div className={styles.regions}>
        <h1>Northeast</h1>
        <h1>North</h1>
        <h1>Southeast</h1>
        <h1>South</h1>
        <h1>Midwest</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
      <h1 className={styles.regions}>Documentários</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
      <h1 className={styles.regions}>Musicais</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
      <h1 className={styles.regions}>Biografias</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
    </div>
  )

}
