import React from "react";
import { Camper } from "../../types";

interface CamperCardProps {
  camper: Camper;
}

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  return (
    <div className="camper-card">
      <img src={camper.gallery[0].thumb} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>{camper.price.toFixed(2)} €</p>
      <p>{camper.location}</p>
      <div>
        <button>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
