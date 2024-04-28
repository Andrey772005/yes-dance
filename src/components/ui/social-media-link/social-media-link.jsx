/* eslint-disable react/prop-types */
import React from 'react';

export const SocialMediaLink = ({className, url, imageSrc, altText}) => {
  return (
    <a className={className} href={url} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={altText} />
    </a>
  );
};