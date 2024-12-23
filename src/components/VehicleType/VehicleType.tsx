import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleType.module.css";
import { toast } from "react-toastify";
import { setFilters } from "../../redux/filterSlice";
import { selectFilters } from "../../redux/selectors";

const vehicleTypes = [
  { id: "alcove", label: "Alcove" },
  { id: "fullyIntegrated", label: "Fully Integrated" },
  { id: "panelTruck", label: "Panel Truck" },
];

const formatVehicleType = (type: string): string => {
  return type
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const VehicleType: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const selectedForm = filters.form || null;

  const handleSelection = (id: string) => {
    const newSelected = selectedForm === id ? null : id;

    const updatedFilters = {
      ...filters,
      form: newSelected || "",
    };

    dispatch(setFilters(updatedFilters));
    displayToast(updatedFilters);
  };

  const displayToast = (appliedFilters: Record<string, string>) => {
    const { form } = appliedFilters;

    if (!form) {
      toast.warn("No vehicle type selected.");
    } else {
      const formattedForm = formatVehicleType(form);
      toast.success(`Vehicle type selected: ${formattedForm}.`);
    }
  };

  return (
    <section
      className={styles.vehicleContainer}
      aria-labelledby="vehicle-title"
    >
      <h4 id="vehicle-title" className={styles.title}>
        Vehicle type
      </h4>
      <div className={styles.line}></div>
      <ul className={styles.typesGrid} role="list">
        {vehicleTypes.map((type) => (
          <li
            key={type.id}
            className={`${styles.typeBox} ${
              selectedForm === type.id ? styles.active : ""
            }`}
            onClick={() => handleSelection(type.id)}
            role="button"
            tabIndex={0}
            aria-pressed={selectedForm === type.id}
            aria-label={`Select ${type.label}`}
          >
            <Icon
              id={type.id}
              className={`${styles.icon} ${
                selectedForm === type.id ? styles.iconActive : ""
              }`}
              width={24}
              height={24}
              aria-hidden="true"
            />
            <span className={styles.label}>{type.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VehicleType;
