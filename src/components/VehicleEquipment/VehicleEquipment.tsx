import React, { useState } from "react";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleEquipment.module.css";

const icons = [
  { id: "AC", label: "AC", type: "boolean" },
  {
    id: "automatic",
    label: "Automatic",
    type: "transmission",
    value: "automatic",
  },
  { id: "manual", label: "Manual", type: "transmission", value: "manual" },
  { id: "kitchen", label: "Kitchen", type: "boolean" },
  { id: "TV", label: "TV", type: "boolean" },
  { id: "bathroom", label: "Bathroom", type: "boolean" },
];

interface VehicleEquipmentProps {
  setFilters: (filters: Record<string, string>) => void;
}

const VehicleEquipment: React.FC<VehicleEquipmentProps> = ({ setFilters }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    const updatedSelection = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];

    setSelected(updatedSelection);

    const updatedFilters = updatedSelection.reduce<Record<string, string>>(
      (acc, key) => {
        const icon = icons.find((icon) => icon.id === key);
        if (icon?.type === "boolean") {
          acc[key] = "true";
        } else if (icon?.type === "transmission" && icon.value) {
          acc["transmission"] = icon.value;
        }
        return acc;
      },
      {}
    );

    setFilters(updatedFilters);
  };

  return (
    <div className={styles.equipmentContainer}>
      <h4 className={styles.title}>Vehicle equipment</h4>
      <div className={styles.iconsGrid}>
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`${styles.iconBox} ${
              selected.includes(icon.id) ? styles.active : ""
            }`}
            onClick={() => toggleSelection(icon.id)}
          >
            <Icon
              id={icon.id}
              className={`${styles.icon} ${
                selected.includes(icon.id) ? styles.iconActive : ""
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
