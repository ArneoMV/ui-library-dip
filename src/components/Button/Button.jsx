import React from 'react';
import './_button.scss';

const Button = ({ type = 'default', children, disabled, onClick }) => {
  const buttonClassName = `button ${type} ${disabled ? 'disabled' : ''}`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;





