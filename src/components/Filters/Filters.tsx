import React, { useState } from "react";
import styles from "./Filters.module.css";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";
import LocationFilter from "../LocationFilter/LocationFilter";
import { toast } from "react-toastify";

interface FiltersProps {
  onApplyFilters: (filters: Record<string, string>) => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const updateFilters = (newFilters: Record<string, string>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  const handleLocationChange = (location: string) => {
    updateFilters({ location });
  };

  const handleButtonClick = () => {
    onApplyFilters(filters);
    displayToast(filters);
  };

  const displayToast = (appliedFilters: Record<string, string>) => {
    const { location, transmission, form, ...equipmentFilters } =
      appliedFilters;

    let message = "Filters applied:";
    if (location) message += ` Location: ${location}.`;
    if (transmission) message += ` Transmission: ${transmission}.`;
    if (form) message += ` Vehicle type: ${form}.`;

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
    <div className={styles.filtersContainer}>
      <LocationFilter onLocationChange={handleLocationChange} />
      <VehicleEquipment setFilters={updateFilters} />
      <VehicleType setFilters={updateFilters} />
      <Button
        text="Search"
        onClick={handleButtonClick}
        className={styles.filterButton}
      />
    </div>
  );
};

export default Filters;
