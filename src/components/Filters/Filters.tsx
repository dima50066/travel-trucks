import React, { useState } from "react";
import styles from "./Filters.module.css";
import Icon from "../../shared/Icons/Icon";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";

interface FiltersProps {
  onApplyFilters: (filters: Record<string, string>) => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [inputValue, setInputValue] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const updateFilters = (newFilters: Record<string, string>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  const handleButtonClick = () => {
    const appliedFilters = {
      ...filters,
      location: inputValue || "",
    };
    onApplyFilters(appliedFilters);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.location}>
        <label className={styles.labelLocation}>Location</label>
        <div className={styles.inputWrapper}>
          <Icon
            id="map"
            className={`${styles.icon} ${inputValue ? styles.iconActive : ""}`}
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="City"
            className={`${styles.inputCity} ${
              inputValue ? styles.inputActive : ""
            }`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <label className={styles.labelFilters}>Filters</label>
      </div>

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
