import React from 'react';
import { Images } from './Images';
import '../../../styles/scss/abstract/_color.scss';

const Icon = ({ name, width = '20px', height = '20px', color }) => {
  const IconComponent = Images[name];

  if (!IconComponent) {
    return null;
  }

  const iconStyle = {
    width,
    height,
    fill: color || 'var(--neutral-900)',
  };

  return (
    <IconComponent style={iconStyle} />
  );
};

export default Icon;
