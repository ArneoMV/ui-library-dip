import React, { useState } from 'react';
import '../../styles/scss/system/_input.scss';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Input = ({ label, placeholder, error, success, disabled }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`input ${error ? 'input-error' : ''} ${success ? 'input-success' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {error && <FaExclamationCircle className="input-icon input-icon-error" />}
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
      {error && <div className="input-error-text">{error}</div>}
    </div>
  );
};

export default Input;


