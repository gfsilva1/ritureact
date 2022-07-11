import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import brazil from '../assets/brazil.png'

import { MagnifyingGlass }from 'phosphor-react'

export function Header() {
  return(
    <div className={styles.header}>
      <img src={logo} alt="" />
      <h1>Learn</h1>
      <h1>Academy</h1>
      <h1>Movies</h1>
      <h1>About us</h1>
      <MagnifyingGlass />
      <img src={brazil} alt="" />

    </div>
  )
}
