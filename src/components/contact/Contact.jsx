import React from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im';
import  {useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lbfatyw', 'template_algtz3e', form.current, 'R5J_aWFdOVlP7K0d-')
      
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>riyadlioner00@gmail.com</h5>
          <a href="mailto:riyadlioner00@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact_option">
          <BsInstagram className='contact_option-icon'/>
          <h4>Instagram</h4>
          <h5>@Lorem.</h5>
          <a href="https://www.instagram.com/" target="_blank">Send a message</a>
        </article>

        <article className="contact_option">
          <ImWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+123456789</h5>
          <a href="https://www.whatsapp.com/" target="_blank">Send a message</a>
        </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


        
      </div>
    </section>
  )
}

export default contact