import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.background}>
      <span id={styles.heading1}>About Me</span>
      <span id={styles.heading2}>Skills</span>

      <div className={styles.about_p}>
        <p>Date of Birth: 18th April 2004</p>
        <p>
          My name is Daniel Eze, I'm an incoming second year Computing Science
          and Mathematics student at the University of Aberdeen.
        </p>
        <p>
          I caught my passion for coding at the age of 13 when I wrote my first line of HTML since then I would
          spend my free time learning new skills and creating projects. Driven
          by my natural push, I have learned (and still learning) various
          languages and framworks such as HTML, CSS, Javascript, Python. During
          that time, I have built various projects, a couple of which I would
          like to share with you.
        </p>
      </div>

      <div className={styles.skills}>
      <span className={styles.u}>Skills</span>
        <span id="disclaimer">
          <em>These ratings are all relative to my personal abilites</em>
        </span>
        <div className={styles.technical}>
        <table>
          <tr className={styles.flex}>
            <td><i className={styles.flexI} class="fa-brands fa-html5"></i></td>
            <td>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
          <tr className={styles.flex}>
          <td> <i className={styles.flexI} class="fa-brands fa-css3"></i></td>
            <td>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
          <tr className={styles.flex}>
          <td> <i className={styles.flexI} class="fa-brands fa-react"></i></td>
            <td>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
          <tr className={styles.flex}>
          <td>   <i className={styles.flexI} class="fa-brands fa-python"></i></td>
            <td>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
          <tr className={styles.flex}>
          <td>  <i className={styles.flexI} class="fa-brands fa-js"></i></td>
            <td>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
        </table>
        </div>
        <div className={styles.general}></div>
      </div>
    </div>
  );
}

export default About;
