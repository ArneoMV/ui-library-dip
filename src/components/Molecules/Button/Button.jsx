import React from 'react';
import './_button.scss';
import Icon from '../../Atoms/Icon/Icon';

const Button = ({ type = 'default', children, disabled, onClick, iconName }) => {
  const buttonClassName = `button ${type} ${disabled ? 'disabled' : ''}`;

  if (type === 'icon') {
    return (
      <button className={buttonClassName} onClick={onClick} disabled={disabled}>
        <Icon name={iconName} />
      </button>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;





