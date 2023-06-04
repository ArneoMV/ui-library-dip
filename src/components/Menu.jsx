import React from "react";
import {NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <div className="side-menu">
      <ul className="menu-items">
        <li><NavLink to="/" exact={true}>Components overview</NavLink></li>
        <li><NavLink to="/button">Button</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/Checkbox">Checkbox</NavLink></li>
        <li><NavLink to="/Radio-button">Radiobutton</NavLink></li>
        <li><NavLink to="/Select">Select</NavLink></li>
        <li><NavLink to="/Switch">Switch</NavLink></li>
        <li><NavLink to="/Tooltip">Tooltip</NavLink></li>
        <li><NavLink to="/Modal">Modal</NavLink></li>
        <li><NavLink to="/Alert">Alert</NavLink></li>
        <li><NavLink to="/Menu">Menu</NavLink></li>
        <li><NavLink to="/Tab">Tab</NavLink></li>
        <li><NavLink to="/Accortion">Accortion</NavLink></li>
        <li><NavLink to="/Progress-bar">Progress bar</NavLink></li>
        <li><NavLink to="/Card">Card</NavLink></li>
        <li><NavLink to="/Slider">Slider</NavLink></li>
        <li><NavLink to="/Date-picker">Date picker</NavLink></li>
        <li><NavLink to="/Pagination">Pagination</NavLink></li>
        <li><NavLink to="/Avatar">Avatar</NavLink></li>
        <li><NavLink to="/Badge">Badge</NavLink></li>
        <li><NavLink to="/Stepper">Stepper</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;



