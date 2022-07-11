import styles from './Ritmo.module.css'

export function Ritmo(props) {
  console.log(props);
  return (
    <div className={styles.tipo}>{props.name}</div>
  )
}
