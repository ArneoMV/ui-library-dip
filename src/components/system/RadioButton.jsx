import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import '../../styles/scss/system/_radio-button.scss';

const RadioButton = ({ label, checked, onChange }) => {
    const handleChange = () => {
      if (!checked) {
        onChange(label);
      }
    };
  
    return (
      <div className="radio">
        <input
          id={label}
          name={label}
          type="radio"
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={label} className="radio-label">
          {label}
        </label>
      </div>
    );
  };
  
  RadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  export default RadioButton;