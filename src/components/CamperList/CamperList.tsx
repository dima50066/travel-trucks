import React from "react";
import CamperCard from "../CamperCard/CamperCard";
import { Camper } from "../../types";
import styles from "./CamperList.module.css";

interface CamperListProps {
  campers: Camper[];
}

const CamperList: React.FC<CamperListProps> = ({ campers }) => {
  return (
    <ul className={styles.camperList}>
      {campers.map((camper) => (
        <li key={camper.id} className={styles.camperListItem}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
