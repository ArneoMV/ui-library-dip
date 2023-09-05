import React from "react";
import ComponentCard from '../ComponentCard/ComponentCard';
import { ComponentImage, IconImage } from '../../utilities/images';
import { NavLink } from "react-router-dom";

const Pregled = () => {
  return (
    <div className="page-structure">
        <h2>Pregled komponenti</h2>
        <p>Metro sadrži komponente korisničkog sučelja za obogaćivanje Vaših web aplikacija.</p>
        <div className="horizontal-line"></div>

        <div className="row">
          <div className="column">
            <h3>Atomi</h3>
            <div className="row">
              
              <NavLink to="/icon"><ComponentCard title="Ikone" image={ComponentImage.icon} /></NavLink>
              <NavLink to="/icon"><ComponentCard title="Boja" image={ComponentImage.color} /></NavLink>
              <NavLink to="/typography"><ComponentCard title="Tipografija" image={ComponentImage.typo} /></NavLink>
              <NavLink to="/shadow"><ComponentCard title="Sjena" image={ComponentImage.shadow} /></NavLink>
              <NavLink to="/line"><ComponentCard title="Linija" image={ComponentImage.line} /></NavLink>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3>Molekule</h3>
            <div className="row">
              <NavLink to="/button"><ComponentCard title="Gumb" image={ComponentImage.button} /></NavLink>
              <NavLink to="/input"><ComponentCard title="Polje za unos" image={ComponentImage.input} /></NavLink>
              <NavLink to="/checkbox"><ComponentCard title="Potvrdni okvir" image={ComponentImage.checkbox} /></NavLink>
              <NavLink to="/radio"><ComponentCard title="Radio gumb" image={ComponentImage.radio} /></NavLink>
              <NavLink to="/select"><ComponentCard title="Izbornik" image={ComponentImage.select} /></NavLink>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="column">
            <h3>Organizmi</h3>
            <div className="row">
              <NavLink to="/alert"><ComponentCard title="Obavijest" image={ComponentImage.alert} /></NavLink>
              <NavLink to="/tab"><ComponentCard title="Tab" image={ComponentImage.tab} /></NavLink>
              <NavLink to="/form"><ComponentCard title="Obrazac za prijavu" image={ComponentImage.form} /></NavLink>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3>Predložak</h3>
            <div className="row">
              <NavLink to="/tamplate"><ComponentCard title="Predložak" image={ComponentImage.predlozak} /></NavLink>
            </div>
          </div>
          
          <div className="column">
            <h3>Stranica</h3>
            <div className="row">
              <NavLink to="/page"><ComponentCard title="Stranica" image={ComponentImage.stranica} /></NavLink>
            </div>          
          </div>
        </div>

    </div>
  );
};

export default Pregled;
