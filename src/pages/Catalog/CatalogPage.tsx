import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { selectCampers, selectLoading } from "../../redux/selectors";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { AppDispatch } from "../../redux/store";
import styles from "./CatalogPage.module.css";

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers({ filters: {} }));
  }, [dispatch]);

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.sidebar}>
        <Filters />
      </div>
      <div className={styles.mainContent}>
        <CamperList campers={campers} />
        {loading && <p className={styles.loading}>Loading...</p>}
        <LoadMoreButton />
      </div>
    </section>
  );
};

export default CatalogPage;
