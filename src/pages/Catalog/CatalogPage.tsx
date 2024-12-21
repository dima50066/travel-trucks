import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredCampers } from "../../redux/operations";
import {
  selectCampers,
  selectLoading,
  selectPage,
  selectTotalPages,
  selectFilters,
} from "../../redux/selectors";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { setPage } from "../../redux/filterSlice";
import { AppDispatch } from "../../redux/store";
import styles from "./CatalogPage.module.css";
import Loader from "../../shared/Loader/Loader";

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchFilteredCampers({ filters, page: currentPage, limit: 4 }));
  }, [dispatch, filters, currentPage]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const hasMoreItems = currentPage < totalPages;

  return (
    <section className={styles.catalogContainer} aria-label="Camper catalog">
      <div className={styles.sidebar} aria-label="Filters sidebar">
        <Filters />
      </div>
      <div className={styles.mainContent} aria-label="Main content area">
        <CamperList campers={campers} />
        {loading && (
          <div className={styles.loaderWrapper} aria-live="polite">
            <Loader />
          </div>
        )}
        {hasMoreItems && !loading && (
          <LoadMoreButton
            onLoadMore={handleLoadMore}
            aria-label="Load more campers"
          />
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
