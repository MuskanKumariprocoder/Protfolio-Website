import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_Muskan',      // Replace with your Service ID
      'template_mk7260932090@gmail.com',     // Replace with your Template ID
      formData,
      'jmDO874QqUs7IXtqu'     // Replace with your User ID (Public Key)
    ).then((response) => {
      //console.log('success', response.status, response.text);
      alert('Email sent successfully!');
    }).catch((err) => {
      //console.log('failed', err);
      alert('Failed to send email. Please try again.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <div id = "contact_form">
      <h1 className={styles.contact_heading}>Contact Me</h1>
      <div>
        <form className={styles.contact_form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your Name"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <textarea
            className={styles.input}
            name="message"
            value={formData.message}
            placeholder="Drop your message"
            rows="8"
            onChange={handleChange}
          />
          <button className={styles.contact_button } type="submit">Submit</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;