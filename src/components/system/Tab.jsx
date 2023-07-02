import React, { useState } from 'react';
import '../../styles/scss/system/_tab.scss';

// Definiranje komponente Tab koja prihvaća opcije za tabove
const Tab = ({ options = [] }) => {
  // Definiranje stanja za aktivni tab i funkcije za postavljanje stanja
  const [activeTab, setActiveTab] = useState(0);

  // Funkcija koja se poziva prilikom klika na tab i postavlja aktivni tab na odabrani indeks
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    // Kontejner za tabove
    <div className="tab-container">
      <div className="tab-row">
        {/* Iteracija kroz opcije i generiranje tabova */}
        {options &&
          options.map((option, index) => (
            <div
              key={index} // Jedinstveni ključ za svaki tab
              className={`tab-option ${activeTab === index ? 'active' : ''}`} // Postavljanje klase 'active' za trenutno odabrani tab
              onClick={() => handleTabClick(index)} // Event listener za klik na tab koji poziva handleTabClick funkciju
            >
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tab;





