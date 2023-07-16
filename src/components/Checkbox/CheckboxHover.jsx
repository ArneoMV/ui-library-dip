import React from 'react';
import PropTypes from 'prop-types';
import './_checkbox.scss';

const CheckboxHover = ({ label }) => {
  return (
    <div className='checkbox-frame'>
      <label className='checkbox-hover'>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <p>{label}</p>
    </div>
  );
};

CheckboxHover.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckboxHover;
