import React from 'react'
import styles from '../styles/contant.module.css'


function Contact() {
  return (
    <div className={styles.back}>
        <span className={styles.header}>Contact Me</span>
        <div>
        <i class="fa-solid fa-at"></i>
        <span className={styles.text}><a className={styles.a} href="mailto:dantheman5100@gmail.com">dantheman5100@gmail.com</a></span>
        </div>
    </div>
  )
}

export default Contact