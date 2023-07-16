import React from 'react';
import PropTypes from 'prop-types';
import './_checkbox.scss';

const CheckboxActive = ({ label }) => {
  return (
    <div className='checkbox-frame'>
      <label className='checkbox-active'>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <p>{label}</p>
    </div>
  );
};

CheckboxActive.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckboxActive;
