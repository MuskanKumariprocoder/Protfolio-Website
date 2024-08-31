import React from 'react'
import styles from './Skill.module.css'

const Skill = () => {
  return (
    <>
    <div id = "skill">
  <h1 className={styles.skill_heading}>Professional Skills</h1>
  <div className={styles.skill_container}>
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img className={styles.skill1} src="image1.jpg" alt="skill1" />
        </div>
        <div className={styles.flip_card_back}>
          <h1>FrontEnd Technologies</h1>
          <p>Proficient in the foundational web development languages of HTML, CSS, and JavaScript, I can build and style user interfaces, ensuring both functionality and aesthetics.</p>
        </div>
      </div>
    </div>
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img className={styles.skill1} src="image2.png" alt="skill1" />
        </div>
        <div className={styles.flip_card_back}>
          <h1>Programming Language</h1>
          <p>Proficient in utilizing Java's built-in data structures such as ArrayList, LinkedList, HashMap, HashSet, and TreeSet for efficient data organization and manipulation.</p>
        </div>
      </div>
    </div>
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img className={styles.skill2} src="image3.jpg" alt="skill1" />
        </div>
        <div className={styles.flip_card_back}>
          <h1>Database</h1>
          <p>Proficient in the foundational web development languages of HTML, CSS, and JavaScript, I can build and style user interfaces, ensuring both functionality and aesthetics.</p>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.skill_container}>
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img className={styles.skill1} src="image4.png" alt="skill1" />
        </div>
        <div className={styles.flip_card_back}>
          <h1>MERN STACK</h1>
          <p>Skilled in the MERN stack, a JavaScript-based technology stack for developing dynamic and interactive web applications.</p>
        </div>
      </div>
    </div>
   
  </div>

</div>
       
  


    
    </>
  )
}

export default Skill