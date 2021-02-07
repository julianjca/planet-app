import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from './PlanetDetail.module.scss'

const PlanetDetail = ({ data }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/">
          <a>
            back
          </a>
        </Link>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.property_container}>
          <h3 className={styles.property_name}>climate</h3>
          <span className={styles.property_value}>{data.climate}</span>
        </div>

        <div className={styles.property_container}>
          <h3 className={styles.property_name}>population</h3>
          <span className={styles.property_value}>{data.population}</span>
        </div>

        <div className={styles.property_container}>
          <h3 className={styles.property_name}>orbital period</h3>
          <span className={styles.property_value}>{data.orbital_period}</span>
        </div>
        <div className={styles.property_container}>
          <h3 className={styles.property_name}>diameter</h3>
          <span className={styles.property_value}>{data.diameter}</span>
        </div>
        <div className={styles.image_wrapper_mobile}>
          <Image src="/planet.png" height={300} width={300} alt="planet" /> 
        </div>
      </div>
     <div className={styles.image_wrapper_desktop}>
        <Image src="/planet.png" height={800} width={800} alt="planet" /> 
      </div>
    </>
  
  )
}

PlanetDetail.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.array,
    name: PropTypes.string,
    diameter: PropTypes.number,
    orbital_period: PropTypes.number,
    population: PropTypes.string,
    climate: PropTypes.string,
  })
}

export default PlanetDetail