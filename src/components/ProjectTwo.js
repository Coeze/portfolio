import React from 'react'
import styles from '../styles/projTwo.module.css'
import url from '../assets/images/Screenshot2.png'

function ProjectTwo() {
  return (
    <div data-aos="flip-down"  data-aos-duration="2000" className={styles.heading}>
       <div className={styles.information}>
      <span className={styles.span} >Project #2 &nbsp; - Database Design</span>
      <p>Developed a database for a research group who were monitoring the impact of fracking activity on earthquakes</p>
      <p>The database utilises spatial queries to quickly view earthquakes that occured within a certain distance from a site associated to a company</p>
      <p>In addition to this, I created a data warehouse, using a star schema, to support efficient data analysis</p>
  </div>
</div>
  )
}

export default ProjectTwo