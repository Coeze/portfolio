import React from 'react'
import styles from '../styles/nav.module.css'

function Nav() {
  return (
    <div className={styles.heading}>
        <div><a href="#about">About</a></div>
        <div><a href='#projects'>Projects</a></div>
    </div>
  )
}

export default Nav