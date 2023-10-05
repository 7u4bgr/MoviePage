import React from 'react'
import styles from './index.module.css'
const Title = (props) => {
  return (
    <h2 className={styles.h2}>{props.children}</h2>
  )
}

export default Title