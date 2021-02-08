import React from 'react'
import PropTypes from 'prop-types'

import styles from './Shared.module.scss'

export const Button = ({ onClick, children, width }) => {
  return (
    <button 
      style={{
        width: width ? `${width}px` : 'auto'
      }} 
      className={styles.button} 
      onClick={onClick}
    >
      <span className={styles.button_content}>
        {children}
      </span>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
}

export const Input = (props) => {
  return (
    <input 
      className={styles.input} 
      style={{
        width: props.width ? `${props.width}px` : 'auto'
      }} 
      {...props}
    />
  )
}

Input.propTypes = {
  width: PropTypes.number,
}