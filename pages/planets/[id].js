import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Home.module.scss'
import PlanetDetail from '../../components/PlanetDetail'

const PlanetPage = ({ data }) => {  
  return (
    <div className={styles.container}>
       <main className={styles.main}>
          <PlanetDetail data={data} />
       </main>
    </div>
  )
}

// data fetching
export const getServerSideProps = async(context) => {
  const res = await fetch(`https://swapi.dev/api/planets/${context.query.id}`)
  const data = await res.json()

  return {
    props: {
      data,
    }
  }
}

PlanetPage.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.array,
    name: PropTypes.string,
  })
}

export default PlanetPage
