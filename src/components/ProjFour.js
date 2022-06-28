import React from 'react'
import styles from '../styles/projfour.module.css'

function ProjFour() {
  return (
    <div data-aos="flip-down"  data-aos-duration="2000" className={styles.heading}>
  <div className={styles.information}>
      <span className={styles.span} >Project #2 &nbsp; - Python Chat App</span>
      <p>For this next project, I used the python socket, threading and tkinter modules to create a chat application</p>
      <p>As soon as a client connects with the server a new thread in the code is created using the threading module</p>
      <p>to ensure that any client can send and receive messages at any time</p>
      <p>I really enjoyed building with this project as it helped me to understand more about how computers interact with each other through sockets.</p>
      <p><b>Note: the code can be found on github</b></p>
  </div>

</div>
  )
}

export default ProjFour