import styles from './Carousel.module.css'
import jongo from '../assets/jongo.png'
import pezinho from '../assets/pezinho.png'
import cururu from '../assets/cururu.png'
import tecnobrega from '../assets/tecnobrega.png'
import { Modal } from './Modal'
import { useState } from 'react';




export function Carousel() {
  const [openModal, setOpenModal] = useState(false);
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
        <div className={styles.item}>
        <button
          className="openModalBtn"
          onClick={() => {
          setOpenModal(true);
        }} />
          <Modal />
        </div>
      </div>
      <h1 className={styles.regions}>Documentários</h1>
      <div className={styles.container}>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
      </div>
      <h1 className={styles.regions}>Musicais</h1>
      <div className={styles.container}>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
      </div>
      <h1 className={styles.regions}>Biografias</h1>
      <div className={styles.container}>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
        <div className={styles.item}><Modal /></div>
      </div>
    </div>
  )

}
