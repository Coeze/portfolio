import React from 'react'
import styles from '../styles/projThree.module.css'
import url from '../assets/images/three.png'


function ProjThree() {
  return (
    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className={styles.heading}>
    <div className={styles.information}>
        <span className={styles.span} >Project #1 &nbsp;- Mexant Template</span>
    <p>I attempted to build a website similar to a template I found online</p>
    <p>I only used HTML, CSS and Javascript for this project</p>
    <p>The most challenging part of this project was trying to get the dynamic movement of the about section</p>
    <p>I really enjoyed this project as I believe it helped me to really ground the fundamentals before moving on to frameworks like React which I used for my other websites, including this portfolio page.</p>
  
    </div>
    <div className={styles.website}>
        <a href='https://courageous-quokka-cef420.netlify.app/' target="_blank" rel="noreferrer"><img className={styles.img1} src={url} alt="website1"/> </a>
    </div>
</div>
  )
}

export default ProjThree