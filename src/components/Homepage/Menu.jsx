import React from "react";
import { NavLink } from "react-router-dom";
import './_menu.scss';
import Icon from "../Atoms/Icon/Icon";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-item pregled">
            <NavLink to="/Pregled" exact={true}>
              Pregled
              <Icon name="menu" />
              </NavLink>
          </div>
          <div className="menu-title"><p>Atom</p></div>
          <div className="menu-item"><NavLink to="/icon">Ikone</NavLink></div>
          <div className="menu-item"><NavLink to="/color">Boja</NavLink></div>
          <div className="menu-item"><NavLink to="/typography">Tipografija</NavLink></div>
          <div className="menu-item"><NavLink to="/shadow">Sjena</NavLink></div>
          <div className="menu-item"><NavLink to="/line">Linija</NavLink></div>
          
          <div className="menu-title"><p>Molekula</p></div>
          <div className="menu-item"><NavLink to="/button">Gumb</NavLink></div>
          <div className="menu-item"><NavLink to="/input">Polje za unos</NavLink></div>
          <div className="menu-item"><NavLink to="/checkbox">Potvrdni okvir</NavLink></div>
          <div className="menu-item"><NavLink to="/radio">Radio gumb</NavLink></div>
          <div className="menu-item"><NavLink to="/select">Izbornik</NavLink></div>
          <div className="menu-item"><NavLink to="/chip">Oznaka</NavLink></div>
          
          <div className="menu-title"><p>Organizam</p></div>
          <div className="menu-item"><NavLink to="/alert">Obavijest</NavLink></div>
          <div className="menu-item"><NavLink to="/tab">Tab</NavLink></div>
          <div className="menu-item"><NavLink to="/form">Forma za prijavu</NavLink></div>
          <div className="menu-item"><NavLink to="/header">Zaglavlje</NavLink></div>
          <div className="menu-item"><NavLink to="/footer">Podnožje</NavLink></div>
          
          <div className="menu-item"><NavLink to="/tamplate"><p>Predložak</p></NavLink></div>
          
          <div className="menu-item"><NavLink to="/page"><p>Stranica</p></NavLink></div>
      </div>
    </div>
  );
};

export default Menu;



