import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="row">
        <div className='col-2-sm col-2-md col-2-lg'>
          <div className="navigation-logo">
            <span>Metro design</span>
            <div className="vertical-line"></div>
          </div>
        </div>
        <div className='col-10-sm col-10-md col-10-lg'>
          <div className="navigation-links">
            <a href="#">Design</a>
            <a href="#">Development</a>
            <a href="#">Components</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

