import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_checkbox.scss';

const Checkbox = ({ label, checked, onChange }) => {
    const checkboxClasses = classNames('checkbox', {
      active: checked,
    });
  
    return (
        <div className='chekbox-container'>
            <label className={checkboxClasses}>
                <input type="checkbox" checked={checked} onChange={onChange} />
                <span className="checkmark"></span>
            </label>
            <p>{label}</p>
        </div>

    );
  };
  
  Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  

export default Checkbox;
