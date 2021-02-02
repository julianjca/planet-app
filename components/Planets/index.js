import React from 'react'

import styles from './Planets.module.scss'
import Card from './Card'

const Planets = ({ planets }) => {
  return (
    <div className={styles.grid}>
      {planets.map((planet, key) => (
        <Card key={key} planet={planet} />
      ))}
    </div>
  )
}

export default Planets