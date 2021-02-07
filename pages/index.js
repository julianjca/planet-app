import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/Home.module.scss'

import SearchInput from '../components/SearchInput'
import Planets from '../components/Planets'

const HomePage = ({ data }) => {
  const [searchInput, setSearchInput] = useState('')
  const [planets, setPlanets] = useState(data.results)
  const [next, setNext] = useState(data.next)

  const searchPlanet = async () => {
    const res = await fetch(`https://swapi.dev/api/planets/?search=${searchInput}`)
    const resData = await res.json()

    setPlanets(resData.results)
  }

  const loadMore = async () => {
    console.log(next)
    if(next) {
      const res = await fetch(next)
      const resData = await res.json()

      console.log(resData)
      setPlanets([...planets, ...resData.results])
      setNext(resData.next)
    }
  }


  useEffect(() => {
    const onScroll = () =>  {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMore()
         // Show loading spinner and make fetch request to api
      }
   }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [loadMore])


  const handleSearchChange = e => setSearchInput(e.target.value)
  const handleKeyDown = e => {
    if(e.keyCode === 13) searchPlanet()
  }
  
  return (
    <div className={styles.container}>
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
    next: PropTypes.string,
  })
}

export default HomePage
