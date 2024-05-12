import React from 'react';
import './styles.css';

export const FooterButton = ({to, imageSrc, style, text}) => {
  return (
    <button className='footer-button' to={to} style={style}>
      <img className='icon' src={imageSrc}/>
      <span className='label'>
        {text}
      </span>
    </button>
  );
}