import React from "react";
import './_navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation row">
      <div className='col-2-sm col-2-md col-2-lg'>
        <div className="navigation-logo">
          <span>Metro design</span>
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className='col-8-sm col-8-md col-8-lg'>
        <div className="navigation-links">
          <a href="#">Design</a>
          <a href="#">Development</a>
          <a href="#">Components</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

