import React from 'react'
import Router from 'next/router'

import styles from './styles.module.scss'

const Card = ({ planet }) => {
  const url = planet.url.replace(`http://swapi.dev/api`, '')
  const handleRedirect = () => Router.push(url)
  return (
    <div onClick={handleRedirect} className={styles.card}>
      <h2>{planet.name}</h2>
    </div>
  )
}

export default Card