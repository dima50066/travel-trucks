import React, { useState } from "react";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleType.module.css";

const vehicleTypes = [
  { id: "van", label: "Van" },
  { id: "integrated", label: "Fully Integrated" },
  { id: "alcove", label: "Alcove" },
];

const VehicleType: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

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
            onClick={() => setSelected(type.id)}
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
