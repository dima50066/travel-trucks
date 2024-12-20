import React from "react";
import styles from "./Filters.module.css";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";
import LocationFilter from "../LocationFilter/LocationFilter";

interface FiltersProps {
  onApplyFilters: (filters: Record<string, string>) => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = React.useState<Record<string, string>>({});

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
