import React from 'react'
import PropTypes from 'prop-types'

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

Planets.propTypes = {
  planets: PropTypes.array,
}

export default Planets