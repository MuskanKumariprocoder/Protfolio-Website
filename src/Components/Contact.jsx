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
      'your_service_id',    // Replace with your actual Service ID from EmailJS
      'your_template_id',   // Replace with your actual Template ID from EmailJS
      formData,
      'your_user_id'        // Replace with your actual User ID (Public Key) from EmailJS
    ).then((response) => {
      alert('Email sent successfully!');
    }).catch((err) => {
      alert('Failed to send email. Please try again.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact_form">
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
          <button className={styles.contact_button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
