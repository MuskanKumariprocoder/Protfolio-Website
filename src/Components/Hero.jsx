import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/muskanresume .pdf';  
    link.setAttribute('download', 'muskanresume .pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  
  return (
    <>
    <div className={styles.hero_container} id = "home">
        <div>
        <h5>Hey, I am Muskan</h5>
        <h1>I am a <strong className={styles.text_color}>Web Developer</strong></h1>
        <p>Passionate web developer with expertise in creating dynamic,<br/>
         user-friendly websites and applications.</p>
<button onClick={handleDownload} className={styles.intouch_button}>
    Download Resume
</button>
</div>
<div>
    <img src = "/profilephoto.jpeg" alt="photo" className={styles.profile_photo}/>
</div>
    </div>
    </>
  )
}

export default Hero