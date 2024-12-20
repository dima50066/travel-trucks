import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./LocationFilter.module.css";
import Icon from "../../shared/Icons/Icon";
import { setLocation } from "../../redux/filterSlice";
import { selectLocation } from "../../redux/selectors";

const LocationFilter: React.FC = () => {
  const dispatch = useDispatch();

  const currentLocation = useSelector(selectLocation);

  const [inputValue, setInputValue] = useState(currentLocation);

  useEffect(() => {
    setInputValue(currentLocation);
  }, [currentLocation]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    dispatch(setLocation(value));
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
