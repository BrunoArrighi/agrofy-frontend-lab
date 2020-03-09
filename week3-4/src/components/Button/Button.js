import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const clicked = () => {
    props.callback();
  };

  

  return <button
    className="button">
    onClick={() => clicked()}>
    {props.label}

  </button>
}

export default Button;