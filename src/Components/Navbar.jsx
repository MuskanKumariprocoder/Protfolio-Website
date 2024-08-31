import React from 'react'
import styles from './Navbar.module.css';


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
    <nav className={styles.container}>
        <div className= {styles.logo}>
        Muskan
        </div>
        <div>
        <ul className={styles.section}>
        <li>
          <a href="#" onClick={() => scrollToSection('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => scrollToSection('about')}>
            About
          </a>
          </li>
          <li>
          <a href="#" onClick={() => scrollToSection('skill')}>
            Skill
          </a>
          </li>
          <li>
          <a href="#" onClick={() => scrollToSection('work')}>
            Work
          </a>
          </li>
    </ul>
        </div>
        <button className={styles.button} onClick={() => scrollToSection('contact_form')}>Contact Me</button>
    </nav>
    </>
  )
}

export default Navbar