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
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Form</th>
            <td>{form || "N/A"}</td>
          </tr>
          <tr>
            <th>Length</th>
            <td>{length !== undefined ? `${length}` : "N/A"}</td>
          </tr>
          <tr>
            <th>Width</th>
            <td>{width !== undefined ? `${width}` : "N/A"}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{height !== undefined ? `${height}` : "N/A"}</td>
          </tr>
          <tr>
            <th>Tank</th>
            <td>{tank !== undefined ? `${tank}` : "N/A"}</td>
          </tr>
          <tr>
            <th>Consumption</th>
            <td>{consumption !== undefined ? `${consumption}` : "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VehicleDetails;
