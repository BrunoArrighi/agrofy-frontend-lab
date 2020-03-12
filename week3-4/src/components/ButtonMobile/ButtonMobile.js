import React from 'react';
import './ButtonMobile.css';


const ButtonMobile = (props) => {
  const clicked = () => {
    props.callback();
  };

  

  return <button

    className="button-mobile"
    onClick={() => clicked()}>
    {props.label}

  </button>
}

export default ButtonMobile;