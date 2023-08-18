import React from 'react';
import { IconImage } from './Images';
import '../../../styles/scss/abstract/_color.scss';

const Icon = ({ name }) => {
  const iconImageSrc = IconImage[name];
  
  if (!iconImageSrc) {
    return null;
  }

  const iconStyle = {
    width: '20px', // Set the desired width here
    height: '20px', // Set the desired height here
  };

  return (
    <img src={iconImageSrc} alt={`Icon ${name}`} style={iconStyle} />
  );
};

export default Icon;
