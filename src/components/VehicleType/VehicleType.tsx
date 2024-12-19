import React, { useState } from "react";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleType.module.css";

const vehicleTypes = [
  { id: "alcove", label: "Alcove" },
  { id: "fullyIntegrated", label: "Fully Integrated" },
  { id: "panelTruck", label: "Panel Truck" },
];

interface VehicleTypeProps {
  setFilters: (filters: Record<string, string>) => void;
}

const VehicleType: React.FC<VehicleTypeProps> = ({ setFilters }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelection = (id: string) => {
    const newSelected = selected === id ? null : id;
    setSelected(newSelected);

    setFilters({
      form: newSelected || "",
    });
  };

  return (
    <div className={styles.vehicleContainer}>
      <h4 className={styles.title}>Vehicle type</h4>
      <div className={styles.line}></div>
      <div className={styles.typesGrid}>
        {vehicleTypes.map((type) => (
          <div
            key={type.id}
            className={`${styles.typeBox} ${
              selected === type.id ? styles.active : ""
            }`}
            onClick={() => handleSelection(type.id)}
          >
            <Icon
              id={type.id}
              className={`${styles.icon} ${
                selected === type.id ? styles.iconActive : ""
              }`}
              width={24}
              height={24}
            />
            <span className={styles.label}>{type.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
