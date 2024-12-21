import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filters.module.css";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";
import LocationFilter from "../LocationFilter/LocationFilter";
import { setFilters } from "../../redux/filterSlice";
import { selectFilters } from "../../redux/selectors";

type FiltersType = Record<string, string>;

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const filters: FiltersType = useSelector(selectFilters);

  const handleButtonClick = async () => {
    dispatch(setFilters(filters));

    try {
      const response = await fetch(
        `/api/data?${new URLSearchParams(filters).toString()}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch filtered data");
      }

      const data = await response.json();
      console.log("Filtered data:", data);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <LocationFilter />
      <VehicleEquipment />
      <VehicleType />
      <div className={styles.buttonsWrapper}>
        <Button
          text="Search"
          onClick={handleButtonClick}
          className={styles.filterButton}
          aria-label="Search with applied filters"
        />
      </div>
    </div>
  );
};

export default Filters;
