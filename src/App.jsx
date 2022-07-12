import { Banner } from './components/Banner'
import { Carousel } from './components/Carousel'
import { Header } from './components/Header'
import { Modal } from './components/Modal';
import { Ritmo } from './components/Ritmo';
import { useState } from 'react';
import { Link } from "react-router-dom";

export function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <Header />
      <Banner />
      <Carousel />
      <Ritmo />
      <Link to="/learn">Learn</Link>
    </div>
  )
}
