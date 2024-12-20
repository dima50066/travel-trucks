import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./LocationFilter.module.css";
import Icon from "../../shared/Icons/Icon";
import { setLocation, setFilters } from "../../redux/filterSlice";
import { selectLocation, selectFilters } from "../../redux/selectors";
import { toast } from "react-toastify";

const LocationFilter: React.FC = () => {
  const dispatch = useDispatch();

  const currentLocation = useSelector(selectLocation);
  const filters = useSelector(selectFilters);

  const [inputValue, setInputValue] = useState(currentLocation);
  const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    setInputValue(currentLocation);
  }, [currentLocation]);

  const isValidLanguage = (value: string): boolean => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      if (!value.trim()) {
        const updatedFilters = { ...filters };
        delete updatedFilters.location;
        dispatch(setFilters(updatedFilters));
        toast.info("Location filter removed.");
        return;
      }

      if (!isValidLanguage(value)) {
        toast.error("Please enter a valid city name in English.");
        return;
      }

      dispatch(setLocation(value));
      displayToast(value);
    }, 1000);

    setDebounceTimeout(timeout);
  };

  const displayToast = (location: string) => {
    toast.success(`Location set to: ${location}`);
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
