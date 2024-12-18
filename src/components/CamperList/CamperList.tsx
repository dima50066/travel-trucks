import React from "react";
import CamperCard from "../CamperCard/CamperCard";
import { Camper } from "../../types";
import styles from "./CamperList.module.css";

interface CamperListProps {
  campers: Camper[];
}

const CamperList: React.FC<CamperListProps> = ({ campers }) => {
  return (
    <div className={styles.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
