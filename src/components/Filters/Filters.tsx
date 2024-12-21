import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filters.module.css";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";
import LocationFilter from "../LocationFilter/LocationFilter";
import { setFilters, setPage } from "../../redux/filterSlice";
import { fetchFilteredCampers } from "../../redux/operations";
import { selectFilters, selectLimit } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";

const Filters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const filters = useSelector(selectFilters);
  const limit = useSelector(selectLimit);

  const handleSearchClick = () => {
    dispatch(setFilters(filters));
    dispatch(setPage(1));

    dispatch(
      fetchFilteredCampers({
        filters,
        page: 1,
        limit,
      })
    );
  };

  return (
    <div className={styles.filtersContainer}>
      <LocationFilter />
      <VehicleEquipment />
      <VehicleType />
      <div className={styles.buttonsWrapper}>
        <Button
          text="Search"
          onClick={handleSearchClick}
          className={styles.filterButton}
          aria-label="Search with applied filters"
        />
      </div>
    </div>
  );
};

export default Filters;
