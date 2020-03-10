import React from 'react';
import './ContactSection.css';
import Button from '../Button/Button';
// import Link from '../Link/Link';
import { Link } from 'react-router-dom';



const ContactSection = () => {
  
  const goToHome = () => {
  };

  
  
    return  <div id="contactSection">
  
    <form className="contact-form">
      <h2> Contact us </h2>
      <input type="text" className="input" placeholder="Name"/>
      <input type="email" className="input" placeholder="Email address" required="required"/>
      <input type="text" className="input" placeholder="Subject"/>
      <textarea className="input" placeholder="Message"></textarea>
      
      <Button callback={() => goToHome()} label={'Send'}></Button>
    </form>
  
  </div>
}

export default ContactSection;