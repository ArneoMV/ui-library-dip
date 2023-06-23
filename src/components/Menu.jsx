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
        <div className="menu-item"><NavLink to="/radio-button">Radiobutton</NavLink></div>
        <div className="menu-item"><NavLink to="/select">Select</NavLink></div>
        <div className="menu-item"><NavLink to="/switch">Switch</NavLink></div>
        <div className="menu-item"><NavLink to="/tooltip">Tooltip</NavLink></div>
        <div className="menu-item"><NavLink to="/modal">Modal</NavLink></div>
        <div className="menu-item"><NavLink to="/alert">Alert</NavLink></div>
        <div className="menu-item"><NavLink to="/menu">Menu</NavLink></div>
        <div className="menu-item"><NavLink to="/tab">Tab</NavLink></div>
        <div className="menu-item"><NavLink to="/accortion">Accortion</NavLink></div>
        <div className="menu-item"><NavLink to="/progress-bar">Progress bar</NavLink></div>
        <div className="menu-item"><NavLink to="/card">Card</NavLink></div>
        <div className="menu-item"><NavLink to="/slider">Slider</NavLink></div>
        <div className="menu-item"><NavLink to="/date-picker">Date picker</NavLink></div>
        <div className="menu-item"><NavLink to="/pagination">Pagination</NavLink></div>
        <div className="menu-item"><NavLink to="/avatar">Avatar</NavLink></div>
        <div className="menu-item"><NavLink to="/badge">Badge</NavLink></div>
        <div className="menu-item"><NavLink to="/stepper">Stepper</NavLink></div>
      </div>
    </div>
  );
};

export default Menu;



