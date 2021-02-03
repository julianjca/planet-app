import React from 'react'
import styles from './styles.module.scss'

const Card = ({ planet }) => {
  return (
    <div className={styles.card}>
      <h2>{planet.name}</h2>
    </div>
  )
}

export default Card