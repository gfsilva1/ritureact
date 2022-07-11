import styles from './Carousel.module.css'
import jongo from '../assets/jongo.png'
import pezinho from '../assets/pezinho.png'
import maracatu from '../assets/maracatu.png'
import cururu from '../assets/cururu.png'
import tecnobrega from '../assets/tecnobrega.png'




export function Carousel() {
  return(
    <div>
      <h1 className={styles.container}>North</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={maracatu} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
      <h1 className={styles.container}>Documentários</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={maracatu} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
      <h1 className={styles.container}>Musicais</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={maracatu} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
      <h1 className={styles.container}>Biografias</h1>
      <div className={styles.container}>
        <div className={styles.item}><img src={jongo} alt="" /></div>
        <div className={styles.item}><img src={pezinho} alt="" /></div>
        <div className={styles.item}><img src={maracatu} alt="" /></div>
        <div className={styles.item}><img src={cururu} alt="" /></div>
        <div className={styles.item}><img src={tecnobrega} alt="" /></div>
      </div>
    </div>
  )

}
