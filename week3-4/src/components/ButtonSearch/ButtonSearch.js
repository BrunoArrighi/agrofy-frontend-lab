import React from 'react';
import './ButtonSearch.css';


const ButtonSearch = (props) => {
  const clicked = () => {
    props.callback();
  };

  

  return <button

    className="button-search"
    onClick={() => clicked()}>
    {props.label}

  </button>
}

export default ButtonSearch;