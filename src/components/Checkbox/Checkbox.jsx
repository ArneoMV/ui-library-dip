import React, { useState } from "react";
import classNames from 'classnames';
import './_checkbox.scss';

const Checkbox = ({ label, checked, onChange, disabled, error }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    if (onChange) {
      onChange(checked);
    }
  };

  const checkboxClasses = classNames('checkbox', {
    'checkbox--checked': checked,
    'checkbox--disabled': disabled,
    'checkbox--error': error,
    'checkbox--hover': isHovered,
    'checkbox--active': isActive,
  });

  return (
    <div className='checkbox-container'>
      <label className={checkboxClasses}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={disabled}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        />
        <span className="checkmark"></span>
      </label>
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;


