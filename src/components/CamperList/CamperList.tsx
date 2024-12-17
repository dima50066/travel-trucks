import React from "react";
import CamperCard from "../CamperCard/CamperCard";
import { Camper } from "../../types";

interface CamperListProps {
  campers: Camper[];
}

const CamperList: React.FC<CamperListProps> = ({ campers }) => {
  return (
    <div className="camper-list">
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
