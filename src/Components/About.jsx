import React, { useEffect, useState } from 'react'
import styles from './About.module.css'

const About = () => {
    const fullText = 'As a dedicated and innovative web developer, I specialize in creating dynamic, user-friendly websites and applications that drive engagement and deliver seamless user experiences. With a strong foundation in HTML, CSS, JavaScript, and JAVA, and expertise in modern frameworks such as ReactJS, I am adept at transforming complex requirements into functional, visually appealing digital solutions. My knowledge extends to CSS frameworks, SQL and NoSQL databases, and backend technologies like Node.js and Express.js. Additionally, I have experience working with Appwrite and Firebase for building scalable and secure applications. My passion for coding is matched by a commitment to staying current with industry trends, ensuring that my projects are built using the latest technologies and best practices. Whether working independently or as part of a collaborative team, I consistently strive for excellence and efficiency in every aspect of the development process.'
    const[index,setIndex] = useState(0);
    const[displaytext, setDisplayText] = useState('');

   useEffect(()=>{
    if(index< fullText.length){
        const timeoutId = setTimeout(()=>{
  setDisplayText(displaytext + fullText[index]);
  setIndex(index+1);
        }, 30);
        return () => clearTimeout(timeoutId);
    }
   }, [index,displaytext,fullText])
  return (
    <>
    <div id ="about">
    <h1 className={styles.about_heading}>About</h1>
    <div className={styles.about}>
    <div className={styles.about_container}>
        <p>{displaytext}</p>
    </div>
        
    </div>
    </div>
    </>
  )
}

export default About