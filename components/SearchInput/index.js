import React from 'react'
import PropTypes from 'prop-types'

import styles from './SearchInput.module.scss'

const SearchInput = ({ handleSearchChange, searchInput, searchPlanet, handleKeyDown }) => {
  return (
    <div className={styles.wrapper}>
      <input 
        onKeyDown={handleKeyDown} 
        onChange={handleSearchChange} v
        alue={searchInput} 
        className={styles.input} 
        placeholder="Search..." 
      />
      <button onClick={searchPlanet} className={styles.button}>Search</button>
    </div>
  )
}

SearchInput.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchPlanet: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
}

export default SearchInput