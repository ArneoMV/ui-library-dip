import React, { useState, useEffect } from 'react';
import './_tab.scss';

 
const Tab = ({ options = [], content = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContent] = useState(content[0]);
 
  useEffect(() => {
    setActiveContent(content[0])
  }, [content])
 
  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveContent(content[index]);
  };
 
  return (
    <div className="tab-container">
      <div className='row'>
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
      <div className="tab-content">
        <pre className="language-javascript"><code language="javascript">{activeContent}</code></pre> 
      </div>
    </div>
  );
};
 
export default Tab;
