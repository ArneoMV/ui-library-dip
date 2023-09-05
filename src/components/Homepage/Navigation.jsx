import React from "react";
import './_navigation.scss';
import Icon from "../Atoms/Icon/Icon";

const Navigation = () => {
  return (
    <div className="navigation row">
      <div className='col-2-sm col-2-md col-2-lg'>
        <div className="navigation-logo">
          {/* <Icon name="menu" /> */}
          <span>Metro design</span>
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

