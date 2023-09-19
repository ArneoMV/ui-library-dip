import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_select.scss';
import arrowDownSvg from '../../../assets/icon/Arrow-down.svg';
import checkIcon from '../../../assets/icon/check.svg';
import Icon from '../../Atoms/Icon/Icon';
import '../../Atoms/Icon/icon.scss';
import { neutral, success } from '../../Atoms/Color/Color';


const Select = ({ type, options, isOpen, toggleOpen, onSelect, title }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.some((selected) => selected.label === option.label);

    let updatedOptions;
    if (isSelected) {
      updatedOptions = selectedOptions.filter((selected) => selected.label !== option.label);
    } else {
      updatedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

  const neutral500 = neutral[500];
  const neutral300 = neutral[300];
  const success500 = success[500];

  return (
    <div className={classNames('select', { 'select-checkbox': type === 'checkbox' })}>
      <div className={classNames('select-header', { open: isOpen })} onClick={toggleOpen}>
        <span className="select-label">{title}</span>
        <Icon 
          name="arrowDown" 
          className={classNames('select-arrow', { up: isOpen })}
        />

      </div>
      {isOpen && (
  <div className="select-options">
    {options.map((option, index) => (
      <div
        key={option.value}
        className={classNames('select-option', {
          selected: selectedOptions.some((selected) => selected.label === option.label),
        })}
        onClick={() => handleOptionClick(option)}
      >
        {type === 'checkbox' && (
          <>
            <p className="option-label">{option.label}</p>
            <div
              className={classNames('select-checkbox-icon', {
                checked: selectedOptions.some((selected) => selected.label === option.label),
              })}
              onClick={() => handleOptionClick(option)}
            >
              {/* <img src={checkIcon} className="option-icon" alt="Check" /> */}
              <Icon 
                name="check2" 
                className="option-icon icon"
                // color={success}
               />

            </div>
          </>
        )}
        {type === 'link' && (
          <a href={option.link} className="option-label link">
            {option.label}
          </a>
        )}
        {type !== 'checkbox' && type !== 'link' && (
          <a className="link">{option.label}</a>
        )}
      </div>
    ))}
  </div>
)}




    </div>
  );
};

Select.propTypes = {
  type: PropTypes.oneOf(['link', 'checkbox']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Select.defaultProps = {
  type: 'link',
};

export default Select;
