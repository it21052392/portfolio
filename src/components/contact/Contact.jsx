import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jk0piyb', 'template_elp3a7c', form.current, 'i5VU6nwYBE9Z8aAbZ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>oshadathawalampola@gmail.com</h5>
            <a href="mailto:oshadathawaalmpola@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Linkedin.com</h5>
            <a href="www.linkedin.com/in/oshada-thawalampola-600289249" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Facebook.com</h5>
            <a href="https://www.facebook.com/oshada.thawalampola.1" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h4>Send Me A Message</h4>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact