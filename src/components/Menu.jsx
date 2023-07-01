import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <div className="side-menu">
      <div className="menu-items">
        <div className="menu-item"><NavLink to="/overview" exact={true}>Pregled komponenti</NavLink></div>
        <div className="menu-item"><NavLink to="/button">Button</NavLink></div>
        <div className="menu-item"><NavLink to="/input">Input</NavLink></div>
        <div className="menu-item"><NavLink to="/checkbox">Checkbox</NavLink></div>
        <div className="menu-item"><NavLink to="/radio">Radio</NavLink></div>
        <div className="menu-item"><NavLink to="/select">Select</NavLink></div>
        <div className="menu-item"><NavLink to="/form">Form</NavLink></div>
        <div className="menu-item"><NavLink to="/tab">Tab</NavLink></div>
      </div>
    </div>
  );
};

export default Menu;



