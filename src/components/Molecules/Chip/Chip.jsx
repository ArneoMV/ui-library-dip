import React from 'react';
import PropTypes from 'prop-types';
import './_chip.scss';

const Chip = ({ text }) => {
  return <div className="chip">{text}</div>;
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Chip;
