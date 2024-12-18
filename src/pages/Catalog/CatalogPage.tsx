import React, { useEffect, useState } from "react";
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

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers({ filters: {} }));
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const hasMoreToLoad = visibleCount < campers.length;

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.sidebar}>
        <Filters />
      </div>
      <div className={styles.mainContent}>
        <CamperList campers={campers.slice(0, visibleCount)} />
        {loading && <p className={styles.loading}>Loading...</p>}
        {hasMoreToLoad && <LoadMoreButton onLoadMore={handleLoadMore} />}
      </div>
    </section>
  );
};

export default CatalogPage;
