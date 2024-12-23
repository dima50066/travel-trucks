import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../shared/Icons/Icon";
import styles from "./VehicleEquipment.module.css";
import { toast } from "react-toastify";
import { setFilters } from "../../redux/filterSlice";
import { selectFilters, selectError } from "../../redux/selectors";

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

const VehicleEquipment: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const error = useSelector(selectError);

  const [selected, setSelected] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (error) {
      toast.error(`Not campers for this filters`);
    }
  }, [error]);

  const toggleSelection = (id: string) => {
    const selectedIcon = icons.find((icon) => icon.id === id);

    if (selectedIcon?.type === "transmission") {
      const currentTransmission = filters.transmission;

      if (currentTransmission && currentTransmission !== selectedIcon.value) {
        toast.error("You can select only one transmission type at a time.");
        return;
      }
    }

    setSelected((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));

    const updatedFilters = { ...filters };

    if (selectedIcon?.type === "boolean") {
      if (filters[id]) {
        delete updatedFilters[id];
      } else {
        updatedFilters[id] = "true";
      }
    } else if (selectedIcon?.type === "transmission" && selectedIcon.value) {
      if (filters.transmission === selectedIcon.value) {
        delete updatedFilters.transmission;
      } else {
        updatedFilters.transmission = selectedIcon.value;
      }
    }

    dispatch(setFilters(updatedFilters));
    displayToast(updatedFilters);
  };

  const displayToast = (appliedFilters: Record<string, string>) => {
    const { transmission, ...equipmentFilters } = appliedFilters;

    let message = "Filters applied:";
    if (transmission) message += ` Transmission: ${transmission}.`;

    const equipmentKeys = Object.keys(equipmentFilters);
    if (equipmentKeys.length > 0) {
      const equipment = equipmentKeys.join(", ");
      message += ` Equipment: ${equipment}.`;
    }

    if (message === "Filters applied:") {
      toast.warn("No filters selected.");
    } else {
      toast.success(message);
    }
  };

  return (
    <section
      className={styles.equipmentContainer}
      aria-labelledby="equipment-title"
    >
      <h4 id="equipment-title" className={styles.title}>
        Vehicle equipment
      </h4>
      <ul className={styles.iconsGrid} role="list">
        {icons.map((icon) => (
          <li
            key={icon.id}
            className={`${styles.iconBox} ${
              selected[icon.id] ? styles.active : ""
            }`}
            onClick={() => toggleSelection(icon.id)}
            role="button"
            tabIndex={0}
            aria-pressed={selected[icon.id]}
            aria-label={`Toggle ${icon.label}`}
          >
            <Icon
              id={icon.id}
              className={`${styles.icon} ${
                selected[icon.id] ? styles.iconActive : ""
              }`}
              width={24}
              height={24}
              aria-hidden="true"
            />
            <span className={styles.label}>{icon.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VehicleEquipment;
