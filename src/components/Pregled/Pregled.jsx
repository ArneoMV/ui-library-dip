import React from "react";
import ComponentCard from '../ComponentCard/ComponentCard';
import { ComponentImage, IconImage } from '../../utilities/images';

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
              <ComponentCard title="Ikone" image={ComponentImage.icon} />
              <ComponentCard title="Boja" image={ComponentImage.color} />
              <ComponentCard title="Tipografija" image={ComponentImage.typo} />
              <ComponentCard title="Sjena" image={ComponentImage.shadow} />
              <ComponentCard title="Linija" image={ComponentImage.line} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3>Molekule</h3>
            <div className="row">
              <ComponentCard title="Gumb" image={ComponentImage.button} />
              <ComponentCard title="Polje za unos" image={ComponentImage.input} />
              <ComponentCard title="Potvrdni okvir" image={ComponentImage.checkbox} />
              <ComponentCard title="Radio gumb" image={ComponentImage.radio} />
              <ComponentCard title="Izbornik" image={ComponentImage.select} />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="column">
            <h3>Organizmi</h3>
            <div className="row">
              <ComponentCard title="Obavijest" image={ComponentImage.alert} />
              <ComponentCard title="Tab" image={ComponentImage.tab} />
              <ComponentCard title="Obrazac za prijavu" image={ComponentImage.form} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3>Predložak</h3>
            <div className="row">
              <ComponentCard title="Predložak" image={ComponentImage.predlozak} />
            </div>
          </div>
          
          <div className="column">
            <h3>Stranica</h3>
            <div className="row">
              <ComponentCard title="Stranica" image={ComponentImage.stranica} />
            </div>          
          </div>
        </div>

    </div>
  );
};

export default Pregled;
