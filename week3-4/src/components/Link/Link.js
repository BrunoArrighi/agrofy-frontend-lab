import React from 'react';
import '../Button/Button.css';

const Link = (props) => {
 
  
    return <a
      className="button"
      href={props.href}>
      {props.label}
    </a>
  }
  
  export default Link;