import React from 'react';
import './Button.css';
<<<<<<< HEAD

=======
import { Link } from 'react-router-dom';
>>>>>>> 29d80e73a2a0176423a03553ebbff9a3f9c13e3a

const Button = (props) => {
  const clicked = () => {
    props.callback();
  };

  

  return <button
<<<<<<< HEAD
    className="button"
=======
    className="button">
>>>>>>> 29d80e73a2a0176423a03553ebbff9a3f9c13e3a
    onClick={() => clicked()}>
    {props.label}

  </button>
}

export default Button;