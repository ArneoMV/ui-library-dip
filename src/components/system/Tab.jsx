import React, { useState } from 'react';
import '../../styles/scss/system/_tab.scss';

const Tab = ({ options = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-row">
        {options &&
          options.map((option, index) => (
            <div
              key={index}
              className={`tab-option ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tab;





