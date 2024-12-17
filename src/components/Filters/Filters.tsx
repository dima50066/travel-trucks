import React, { useState } from "react";
import styles from "./Filters.module.css";
import Icon from "../../shared/Icons/Icon";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";

const Filters: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    console.log("Filters applied!");
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

      <VehicleEquipment />

      <VehicleType />

      <Button
        text="Search"
        onClick={handleButtonClick}
        className={styles.filterButton}
      />
    </div>
  );
};

export default Filters;
