import React from 'react'
import styles from '../styles/other.module.css'

function OtherProjects() {
  return (
    <div className={styles.main}>
        Other Projects - The code can be found on my github by clicking on the github icon below.  
        <div className={styles.projects}>
            <p>Qr code generator - used python tkinter and qrcode module</p>
            <p>Notion API - used Node.js and Notion JavaScript API to organise to maximise productivity. </p>
        </div>
    </div>
  )
}

export default OtherProjects