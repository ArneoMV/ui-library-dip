import React from 'react';
import { IconImage } from './Images';
import '../../../styles/scss/abstract/_color.scss';

const Icon = ({ name, className, color }) => {
  const iconImageSrc = IconImage[name];
  
  if (!iconImageSrc) {
    return null;
  }


  const iconStyle = {
    width: '24px', // Default size
    height: '24px'
  };

  const svgStyle = {
    fill: color, // Set the color using the 'color' prop
  };


  return (
    <img 
      src={ iconImageSrc } 
      alt={ `Icon ${name}` } 
      className={ className }
      style={ iconStyle }
    />
  );
};

export default Icon;
export { Icon };