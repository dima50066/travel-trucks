import React from "react";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  form?: string;
  length?: number;
  width?: number;
  height?: number;
  tank?: number;
  consumption?: number;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  return (
    <div className={styles.vehicleDetails}>
      <h3>Vehicle details</h3>
      <div className={styles.rowContainer}>
        <div className={styles.detailsRow}>
          <span>Form</span>
          <span>{form || "N/A"}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Length</span>
          <span>{length !== undefined ? `${length}` : "N/A"}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Width</span>
          <span>{width !== undefined ? `${width}` : "N/A"}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Height</span>
          <span>{height !== undefined ? `${height}` : "N/A"}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Tank</span>
          <span>{tank !== undefined ? `${tank}` : "N/A"}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Consumption</span>
          <span>{consumption !== undefined ? `${consumption}` : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
