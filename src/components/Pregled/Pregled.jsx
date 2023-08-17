import React from "react";
import ComponentCard from '../ComponentCard/ComponentCard';
import { ComponentImage, IconImage } from '../../utilities/images';

const Pregled = () => {
  return (
    <div className="page-structure">
        <h2>Pregled komponenti</h2>
        <p>Metro sadrži komponenti korisničkog sučelja za obogaćivanje vaših web aplikacija, a mi ćemo dosljedno poboljšavati iskustvo komponenti.</p>
        <div className="horizontal-line"></div>
        <h3>Atomi</h3>
        <div className="row">
          <ComponentCard title="Icon" image={ComponentImage.icon} />
          <ComponentCard title="Color" image={ComponentImage.color} />
          <ComponentCard title="Typography" image={ComponentImage.typo} />
          <ComponentCard title="Shadow" image={ComponentImage.shadow} />
          <ComponentCard title="Line" image={ComponentImage.line} />
        </div>
        <h3>Molekule</h3>
        <div className="row">
          <ComponentCard title="Button" image={ComponentImage.button} />
          <ComponentCard title="Input" image={ComponentImage.input} />
          <ComponentCard title="Checkbox" image={ComponentImage.checkbox} />
          <ComponentCard title="Radio-button" image={ComponentImage.radio} />
          <ComponentCard title="Select" image={ComponentImage.select} />
        </div>
        <h3>Organizmi</h3>
        <div className="row">
          <ComponentCard title="Alert" image={ComponentImage.alert} />
          <ComponentCard title="Tab" image={ComponentImage.tab} />
          <ComponentCard title="Form" image={ComponentImage.form} />
        </div>
    </div>
  );
};

export default Pregled;
