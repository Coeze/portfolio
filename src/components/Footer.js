import React from 'react'
import styles from '../styles/Footer.module.css'
import url from '../assets/images/header_image.webp'

function Footer() {
    let date = new Date().toLocaleDateString(); 
  return (
    <footer className={styles.footer}>
    <div className={styles.img_div}>
        <img className={styles.img} src={url}/>
    </div>
      <div>{date} </div>
      <div className={styles.icons}>
      <a href='https://github.com/Coeze?tab=repositorie' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/daniel-eze-2510781b1/" target="_blank" rel="noreferrer"><i id={styles.special} class="fa-brands fa-linkedin"></i></a>
       <a href='mailto:dantheman5100@gmail.com'> <i class="fa-solid fa-envelope"></i></a>

      </div>
      <div>Daniel Eze</div>
    </footer>
  )
}

export default Footer