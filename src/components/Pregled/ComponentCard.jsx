import React from 'react';
import './_component-card.scss';


const ComponentCard = ({ title, image }) => {
  return (
    <div className="component-card column">

      <div className="card-title">
        {title}
      </div>

      <div className="horizontal-line"></div>

      <div className="center">
        <img alt="Card" className="card-image" src={image} />
      </div>

    </div>
  );
};

export default ComponentCard;

