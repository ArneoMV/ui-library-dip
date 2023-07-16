import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_select.scss';
import { ReactSVG } from 'react-svg';
import arrowDownSvg from '../image/icon/Arrow-down.svg';
import checkIcon from '../image/icon/check.svg';

const Select = ({ type, options, selectNumber, isOpen, toggleOpen, onSelect, title }) => {
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

  return (
    <div className={classNames('select', { 'select-checkbox': type === 'checkbox' })}>
      <div className={classNames('select-header', { open: isOpen })} onClick={toggleOpen}>
        <span className="select-label">{title}</span>
        <ReactSVG src={arrowDownSvg} className={classNames('select-arrow', { up: isOpen })} />
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
                <input
                  type="checkbox"
                  checked={selectedOptions.some((selected) => selected.label === option.label)}
                  onChange={() => handleOptionClick(option)}
                />
              )}
              {type === 'link' ? (
                <a href={option.link} className="option-label">
                  {option.label}
                </a>
              ) : (
                <>
                  <p className="option-label">{option.label}</p>
                  <img src={checkIcon} className="option-icon" alt="Check" />
                </>
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
  selectNumber: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Select.defaultProps = {
  type: 'link',
};

export default Select;
