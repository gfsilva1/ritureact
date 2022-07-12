import { Banner } from './components/Banner'
import { Carousel } from './components/Carousel'
import { Header } from './components/Header'
import { Modal } from './components/Modal';
import { Ritmo } from './components/Ritmo';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './App.module.css'

export function App() {
  return (
    <div class={styles.body}>
      <Header />
      <Banner />
      <Carousel />
      <Ritmo />
      <Link to="/learn">Learn</Link>
    </div>
  )
}
