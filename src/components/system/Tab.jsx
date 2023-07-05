import React, { useState } from 'react';
import '../../styles/scss/system/_tab.scss';

const Tab = ({ options = [], content = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContent] = useState(content[0]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveContent(content[index]);
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
      <div className="tab-content">
        <pre className="language-javascript"><code>{activeContent}</code></pre> 
      </div>
    </div>
  );
};

export default Tab;
