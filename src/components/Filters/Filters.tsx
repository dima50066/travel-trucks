import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filters.module.css";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Button from "../../shared/Button/Button";
import LocationFilter from "../LocationFilter/LocationFilter";
import { toast } from "react-toastify";
import { setFilters } from "../../redux/filterSlice";
import { selectFilters } from "../../redux/selectors";

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  const handleButtonClick = () => {
    dispatch(setFilters(filters));
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
      <LocationFilter />
      <VehicleEquipment />
      <VehicleType />
      <div className={styles.buttonsWrapper}>
        <Button
          text="Search"
          onClick={handleButtonClick}
          className={styles.filterButton}
        />
      </div>
    </div>
  );
};

export default Filters;
