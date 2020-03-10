import React from 'react';
import './ContactSection.css';
import Button from '../Button/Button';
// import Link from '../Link/Link';
import { Link } from 'react-router-dom';



const ContactSection = () => {
  
<<<<<<< HEAD
  const goToHome = () => {
  };

  
=======
    
>>>>>>> 29d80e73a2a0176423a03553ebbff9a3f9c13e3a
  
    return  <div id="contactSection">
  
    <form className="contact-form">
      <h2> Contact us </h2>
      <input type="text" className="input" placeholder="Name"/>
      <input type="email" className="input" placeholder="Email address" required="required"/>
      <input type="text" className="input" placeholder="Subject"/>
      <textarea className="input" placeholder="Message"></textarea>
      
<<<<<<< HEAD
      <Button callback={() => goToHome()} label={'Send'}></Button>
=======
      <Button label={'Send'}> <Link to="/"/> </Button>
>>>>>>> 29d80e73a2a0176423a03553ebbff9a3f9c13e3a
    </form>
  
  </div>
}

export default ContactSection;