import React from 'react'
import styles from './Work.module.css'

const Work = () => {
  const handleButtonClick1 = () => {
    window.location.href = 'https://github.com/MuskanKumariprocoder/Digital-Clocks';
  };

  const handleButtonClick2 = () => {
    window.location.href = 'https://github.com/MuskanKumariprocoder/Quiz-Website';
  };

  const handleButtonClick3 = () => {
    window.location.href = 'https://github.com/MuskanKumariprocoder/Weather-Appp';
  };
  return (
<>
<div id = "work">
<h1 className={styles.work_heading}>My Work</h1>
<div className={styles.work_container}>
<div className={styles.card}>
  <img className={styles.work1} src="image7.jpg" alt="work1" />
  <div className={styles.container}>
    <h4><b>Digital Clock</b></h4>
   <button onClick={handleButtonClick1}>View Source Code</button>
  </div>
</div>
<div className={styles.card}>
  <img className={styles.work1} src="images9.jpg
  " alt="work1" />
  <div className={styles.container}>
    <h4><b>Quiz Website</b></h4>
   <button onClick = {handleButtonClick2}>View Source Code</button>
  </div>
</div>
<div className={styles.card}>
  <img className={styles.work1} src="image6.png" alt="work1" />
  <div className={styles.container}>
    <h4><b>Weather App</b></h4>
   <button onClick = {handleButtonClick3}>View Source Code</button>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Work