import React from "react";
import { NavLink } from "react-router-dom";
import './_menu.scss';

const Menu = () => {
  return (
    <div className="side-menu">
      <div className="menu-items">
        <div className="menu-item pregled"><NavLink to="/Pregled" exact={true}>Pregled</NavLink></div>
        <div className="menu-item"><p>Atom</p></div>
          <div className="menu-item"><NavLink to="/icon">Icon</NavLink></div>
          <div className="menu-item"><NavLink to="/color">Color</NavLink></div>
          <div className="menu-item"><NavLink to="/typography">Typography</NavLink></div>
          <div className="menu-item"><NavLink to="/shadow">Shadow</NavLink></div>
          <div className="menu-item"><NavLink to="/line">Line</NavLink></div>
        <div className="menu-item"><p>Molecules</p></div>
          <div className="menu-item"><NavLink to="/button">Button</NavLink></div>
          <div className="menu-item"><NavLink to="/input">Input</NavLink></div>
          <div className="menu-item"><NavLink to="/checkbox">Checkbox</NavLink></div>
          <div className="menu-item"><NavLink to="/radio">Radio</NavLink></div>
          <div className="menu-item"><NavLink to="/select">Select</NavLink></div>
        <div className="menu-item"><p>Organisms</p></div>
        <div className="menu-item"><NavLink to="/alert">Alert</NavLink></div>
        <div className="menu-item"><NavLink to="/tab">Tab</NavLink></div>
          <div className="menu-item"><NavLink to="/form">Sign in form</NavLink></div>
        <div className="menu-item"><p>Tamplates</p></div>
        <div className="menu-item"><p>Stranice</p></div>

      </div>
    </div>
  );
};

export default Menu;



