import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from '../Shared'
import styles from './SearchInput.module.scss'

const SearchInput = ({ handleSearchChange, searchInput, searchPlanet, handleKeyDown }) => {
  return (
    <div className={styles.wrapper}>
      <Input 
        onKeyDown={handleKeyDown} 
        onChange={handleSearchChange}
        value={searchInput} 
        placeholder="Search..." 
        data-testid="planet_input"
        name="planet_input"
        width={320}
      />
      <Button 
        onClick={searchPlanet} 
        width={200}
      >
        Search
      </Button>
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