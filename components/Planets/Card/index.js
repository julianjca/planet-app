import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

import styles from './Card.module.scss'

const Card = ({ planet }) => {
  const url = planet.url.replace(`http://swapi.dev/api`, '')
  const handleRedirect = () => Router.push(url)
  return (
    <div onClick={handleRedirect} className={styles.card}>
      <h2>{planet.name}</h2>
    </div>
  )
}

Card.propTypes = {
  planet: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  })
}

export default Card