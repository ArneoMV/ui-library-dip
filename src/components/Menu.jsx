import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <div className="side-menu">
      <ul className="menu-items">
        <li><NavLink to="/" exact={true}>Components overview</NavLink></li>
        <li><NavLink to="/button">Button</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/checkbox">Checkbox</NavLink></li>
        <li><NavLink to="/radio-button">Radiobutton</NavLink></li>
        <li><NavLink to="/select">Select</NavLink></li>
        <li><NavLink to="/switch">Switch</NavLink></li>
        <li><NavLink to="/tooltip">Tooltip</NavLink></li>
        <li><NavLink to="/modal">Modal</NavLink></li>
        <li><NavLink to="/alert">Alert</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/tab">Tab</NavLink></li>
        <li><NavLink to="/accortion">Accortion</NavLink></li>
        <li><NavLink to="/progress-bar">Progress bar</NavLink></li>
        <li><NavLink to="/card">Card</NavLink></li>
        <li><NavLink to="/slider">Slider</NavLink></li>
        <li><NavLink to="/date-picker">Date picker</NavLink></li>
        <li><NavLink to="/pagination">Pagination</NavLink></li>
        <li><NavLink to="/avatar">Avatar</NavLink></li>
        <li><NavLink to="/badge">Badge</NavLink></li>
        <li><NavLink to="/stepper">Stepper</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;



