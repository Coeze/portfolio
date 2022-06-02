import React from 'react'
import url from '../assets/images/header_image.webp'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div className="animate__animated animate__rubberBand">
        <p className={styles.header_text}>Hey, My name is Daniel</p>
        <p className={styles.header_text}>Welcome to my portfolio</p>
        <div className={styles.icons}>
        <a href='https://github.com/Coeze?tab=repositorie' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        <a className={styles.linkedina} href="https://www.linkedin.com/in/daniel-eze-2510781b1/" target="_blank" rel="noreferrer"><i id={styles.special} class="fa-brands fa-linkedin"></i></a>
        </div>
        </div>
        <div className={styles.imgDiv}>
            <img className={styles.img} src={url} alt="D"/>
        </div>
    </div>
  )
}

export default Header