import React from 'react'

import styles from './styles.module.scss'

const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search..." />
    </div>
  )
}

export default SearchInput