import React, { useState } from "react";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleEquipment.module.css";

const icons = [
  { id: "ac", label: "AC" },
  { id: "automatic", label: "Automatic" },
  { id: "kitchen", label: "Kitchen" },
  { id: "tv", label: "TV" },
  { id: "bathroom", label: "Bathroom" },
];

const VehicleEquipment: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={styles.equipmentContainer}>
      <h4 className={styles.title}>Vehicle equipment</h4>
      <div className={styles.iconsGrid}>
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`${styles.iconBox} ${
              selected === icon.id ? styles.active : ""
            }`}
            onClick={() => setSelected(icon.id)}
          >
            <Icon
              id={icon.id}
              className={`${styles.icon} ${
                selected === icon.id ? styles.iconActive : ""
              }`}
              width={24}
              height={24}
            />
            <span className={styles.label}>{icon.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
