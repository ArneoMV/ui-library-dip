import React from "react";
import './_navigation.scss';
import MetroSVG from "../../assets/Metro.svg";

const Navigation = () => {
  return (
    <div className="navigation row">
      <div className='col-2-sm col-2-md col-2-lg'>
        <div className="navigation-logo">
        <img src={MetroSVG} alt="Metro Logo" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;

