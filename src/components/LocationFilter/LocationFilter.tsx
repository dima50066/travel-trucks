import React, { useState } from "react";
import styles from "./LocationFilter.module.css";
import Icon from "../../shared/Icons/Icon";

interface LocationFilterProps {
  onLocationChange: (location: string) => void;
}

const LocationFilter: React.FC<LocationFilterProps> = ({
  onLocationChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onLocationChange(value);
  };

  return (
    <div className={styles.locationContainer}>
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
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
