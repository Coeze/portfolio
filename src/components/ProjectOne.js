import React from 'react'
import styles from '../styles/ProjectOne.module.css'
import url from '../assets/images/screenshot1.png'

function ProjectOne() {
  return (
    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className={styles.heading}>
        <div className={styles.information}>
            <span className={styles.span} >Project #2 &nbsp;- Tech World</span>

            <p>It is about a tech company which is promoting its new vr product.</p>
            <p>It was created using React, during the project I practiced using the React Context API in order to keep track of the state of the basket.</p>
            <p>In order to implement the contact form I used Email JS to send the emails</p>
            <p>I used styled components to style the website to prevent classname collisions.</p>
      
        </div>
        <div className={styles.website}>
            <a href='https://keen-flan-e6851e.netlify.app/' target="_blank" rel="noreferrer"><img className={styles.img1} src={url} alt="website1"/> </a>
        </div>
    </div>
  )
}

export default ProjectOne