import React from "react";
import { NavLink } from "react-router-dom";
import './_menu.scss';

const Menu = () => {
  return (
    <div className="side-menu">
      <div className="menu-items">
        <div className="menu-item pregled"><NavLink to="/Pregled" exact={true}>Pregled</NavLink></div>
        <div className="menu-item"><p>Atom</p></div>
          <div className="menu-item"><NavLink to="/icon">Ikone</NavLink></div>
          <div className="menu-item"><NavLink to="/color">Boja</NavLink></div>
          <div className="menu-item"><NavLink to="/typography">Tipografija</NavLink></div>
          <div className="menu-item"><NavLink to="/shadow">Sjena</NavLink></div>
          <div className="menu-item"><NavLink to="/line">Linija</NavLink></div>
        <div className="menu-item"><p>Molecules</p></div>
          <div className="menu-item"><NavLink to="/button">Gumbi</NavLink></div>
          <div className="menu-item"><NavLink to="/input">Unos</NavLink></div>
          <div className="menu-item"><NavLink to="/checkbox">Označnik</NavLink></div>
          <div className="menu-item"><NavLink to="/radio">Radijski gumb</NavLink></div>
          <div className="menu-item"><NavLink to="/select">Izbornik</NavLink></div>
        <div className="menu-item"><p>Organisms</p></div>
        <div className="menu-item"><NavLink to="/alert">Uzbuna</NavLink></div>
        <div className="menu-item"><NavLink to="/tab">Kartica</NavLink></div>
          <div className="menu-item"><NavLink to="/form">Forma</NavLink></div>
        <div className="menu-item"><p>Tamplates</p></div>
        <div className="menu-item"><p>Stranice</p></div>

      </div>
    </div>
  );
};

export default Menu;



