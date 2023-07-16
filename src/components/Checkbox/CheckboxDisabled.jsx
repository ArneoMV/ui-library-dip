import React from 'react';
import PropTypes from 'prop-types';
import './_checkbox.scss';

const CheckboxDisabled = ({ label }) => {
  return (
    <div className='checkbox-frame'>
      <label className='checkbox-disabled'>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <p>{label}</p>
    </div>
  );
};

CheckboxDisabled.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckboxDisabled;
