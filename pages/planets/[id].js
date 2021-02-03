import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Home.module.scss'

const HomePage = ({ data }) => {
  
  return (
    <div className={styles.container}>
       <main className={styles.main}>
          <h1 className={styles.title}>{data.name}</h1>
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

HomePage.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.array,
  })
}

export default HomePage
