
import React, { useState } from "react";
import classNames from 'classnames';
import './ColorCard.scss';

const ColorCard = ({ colorName, colorHex, onClick, className, customClasses }) => {
  const handleCopyHex = () => {
    navigator.clipboard.writeText(colorHex)
      .then(() => {
        console.log(`Color Hex value copied: ${colorHex}`);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };
  
  // Koristimo classNames biblioteku da kombinujemo klase
  const cardClasses = classNames('color-card', className, customClasses);

  return (
    <div onClick={() => { onClick(colorName, colorHex); handleCopyHex(); }} className={cardClasses} style={{ backgroundColor: colorHex }}>
      <div className="color-info">
        <p className="color-name">{colorName}</p>
        <p className="color-hex">
          {colorHex}
        </p>
      </div>
    </div>
  );
};

export default ColorCard;
