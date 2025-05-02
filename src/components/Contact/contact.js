import React, { useRef } from 'react';
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w6e5s89', 'template_yri6pra', form.current, {
        publicKey: 'qoG_aLtK7aaZSkFm9'
      })
      .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
  <section id='contactPage'>
    <div id='clients'>
<h1 className='contactPageTitle'>My clients</h1>
<p className='clientDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include.</p>
<div className='clientImgs'>
    <img src={Walmart} alt='' className='clientImg' />
    <img src={Adobe} alt='' className='clientImg' />
    <img src={Microsoft} alt='' className='clientImg' />
    <img src={Facebook} alt='' className='clientImg' />
   
</div>
    </div>
    <div id='contact'>
 <h1 className='contactPageTitle'>Contact Me</h1>
 <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
 <form ref={form} onSubmit={sendEmail} className='contactForm' >
 <input type='text' className='name' placeholder='Your Name' name="user_name"></input>
 <input type='email' className='email' placeholder='Your Email'name="user_email" ></input>
 <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
 <button type='submit' value="send" className='submitBtn' >Submit</button>
 </form>
      <div className='links'>
        <img src={FacebookIcon} alt='Facebool' className='link' /> 
        <img src={TwitterIcon} alt='Twitter' className='link' /> 
        <img src={YoutubeIcon} alt='Youtube' className='link' /> 
        <img src={InstagramIcon} alt='Instagram' className='link' /> 
      </div>
    </div>
  </section>
  )
}

export default Contact
