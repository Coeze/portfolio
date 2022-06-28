import React from 'react'
import styles from '../styles/projTwo.module.css'
import url from '../assets/images/Screenshot2.png'

function ProjectTwo() {
  return (
    <div data-aos="flip-down"  data-aos-duration="2000" className={styles.heading}>
      <div className={styles.website}>
        <a href='https://fastidious-kringle-cb67d4.netlify.app/' target="_blank" rel="noreferrer"><img className={styles.img1} src={url} alt="website1"/> </a>
    </div>
    <div className={styles.information}>
        <span className={styles.span} >Project #4 &nbsp; - Curology</span>
        <p>For this next project, I attempted to replicate Curology's landing page</p>
        <p>This project was also created using React</p>
        <p>I used the javascript in built javascript math object in order to randomly change the text</p>
    </div>
  
</div>
  )
}

export default ProjectTwo