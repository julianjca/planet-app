import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import SearchInput from '../components/SearchInput'
import Planets from '../components/Planets'

const HomePage = ({ data }) => {
  const [searchInput, setSearchInput] = useState('')
  const [planets, setPlanets] = useState(data.results)

  const searchPlanet = async () => {
    const res = await fetch(`https://swapi.dev/api/planets/?search=${searchInput}`)
    const resData = await res.json()

    setPlanets(resData.results)
  }


  const handleSearchChange = e => setSearchInput(e.target.value)
  const handleKeyDown = e => {
    if(e.keyCode === 13) searchPlanet()
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br /> <span>The Planet App</span>
        </h1>
        <SearchInput 
          handleKeyDown={handleKeyDown} 
          searchPlanet={searchPlanet} 
          handleSearchChange={handleSearchChange} 
          searchInput={searchInput}
        />
        <Planets planets={planets} />
      </main>
    </div>
  )
}

// data fetching
export const getStaticProps = async() => {
  const res = await fetch('https://swapi.dev/api/planets')
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
