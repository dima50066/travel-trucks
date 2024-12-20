import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleType.module.css";
import { setFilters } from "../../redux/filterSlice";
import { selectFilters } from "../../redux/selectors";

const vehicleTypes = [
  { id: "alcove", label: "Alcove" },
  { id: "fullyIntegrated", label: "Fully Integrated" },
  { id: "panelTruck", label: "Panel Truck" },
];

const VehicleType: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const selectedForm = filters.form || null;

  const handleSelection = (id: string) => {
    const newSelected = selectedForm === id ? null : id;

    dispatch(
      setFilters({
        ...filters,
        form: newSelected || "",
      })
    );
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
              selectedForm === type.id ? styles.active : ""
            }`}
            onClick={() => handleSelection(type.id)}
          >
            <Icon
              id={type.id}
              className={`${styles.icon} ${
                selectedForm === type.id ? styles.iconActive : ""
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
