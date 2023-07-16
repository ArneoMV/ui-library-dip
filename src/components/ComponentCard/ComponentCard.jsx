import React from 'react';

const ComponentCard = ({ title, image }) => {
  return (
    <div className="component-card column">

      <div className="card-title">
        <p>{title}</p>
      </div>

      <div className="horizontal-line"></div>

      <div className="center">
        <img alt="Card" className="card-image" src={image} />
      </div>

    </div>
  );
};

export default ComponentCard;

