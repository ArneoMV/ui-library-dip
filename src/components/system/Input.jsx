import React, { useState } from 'react';
import '../../styles/scss/system/_input.scss';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Input = ({ label, placeholder, error, success, disabled, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  ;

  const hasError = error && !success;

  return (
    <div className={`input ${hasError ? 'input-error' : ''} ${success ? 'input-success' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {hasError && <FaExclamationCircle className="input-icon input-icon-error" />}
        {success && <FaCheckCircle className="input-icon input-icon-success" />}
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      {hasError && <div className="input-error-text">{error}</div>}
    </div>
  );
};

export default Input;


