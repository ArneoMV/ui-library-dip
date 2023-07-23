import React from "react";
import ComponentCard from '../ComponentCard/ComponentCard';
import { ComponentImage, IconImage } from '../../utilities/images';

const Overview = () => {
  return (
    <div className="page-structure">
        <h2>Pregled komponenti</h2>
        <p>Metro sadrži komponenti korisničkog sučelja za obogaćivanje vaših web aplikacija, a mi ćemo dosljedno poboljšavati iskustvo komponenti.</p>
        <div className="horizontal-line"></div>

        <h3>Molekule</h3>
        <div className="row">
          <ComponentCard title="Gumb" image={ComponentImage.button} />
          <ComponentCard title="Checkbox" image={ComponentImage.checkbox} />
          <ComponentCard title="Radio-button" image={ComponentImage.radio} />
          <ComponentCard title="Input" image={ComponentImage.input} />
          <ComponentCard title="Select" image={ComponentImage.select} />
        </div>
        <h3>Stanice</h3>
        <div className="row">
            <ComponentCard title="Form" image={ComponentImage.form} />
        </div>
    </div>
  );
};

export default Overview;
