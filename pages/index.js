import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ClipLoader from "react-spinners/ClipLoader";

import styles from '../styles/Home.module.scss'

import SearchInput from '../components/SearchInput'
import Planets from '../components/Planets'

const HomePage = ({ data }) => {
  const [searchInput, setSearchInput] = useState('')
  const [planets, setPlanets] = useState(data.results)
  const [next, setNext] = useState(data.next)

  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const searchPlanet = async () => {
    setIsLoading(true)
    const res = await fetch(`https://swapi.dev/api/planets/?search=${searchInput}`)
    const resData = await res.json()

    setIsLoading(false)

    setPlanets(resData.results)
    setNext(resData.next)
  }

  const loadMore = async () => {
    if(next) {
      setIsLoadingMore(true)
      const res = await fetch(next)
      const resData = await res.json()

      setIsLoadingMore(false)
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
          The planet app
        </h1>
        <p className={styles.subtitle}>
          Browse the planet you love from Star Wars below.
        </p>
        <SearchInput 
          handleKeyDown={handleKeyDown} 
          searchPlanet={searchPlanet} 
          handleSearchChange={handleSearchChange} 
          searchInput={searchInput}
        />
        {
          isLoading ? (
            <div className={styles.loader_wrapper}>
              <ClipLoader color="#ffffff" loading={isLoading} size={30} />
            </div>
          ) : (
            <>
            
              <Planets planets={planets} />
              {
                isLoadingMore && (
                  <div className={styles.loader_wrapper}>
                    <ClipLoader color="#ffffff" loading={isLoadingMore} size={30} />
                  </div>
                )
              }
            </>
          )
        }
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
