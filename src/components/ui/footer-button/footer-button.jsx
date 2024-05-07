import React from 'react';
import './styles.css';

export const FooterButton = ({className, to, imageSrc, role, text}) => {
  return (
    <button className={className} to={to} src={imageSrc} role={role}>
      <span className={className}>
        {text}
      </span>
    </button>
  );
}