import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import {
  selectCampers,
  selectLoading,
  selectCurrentPage,
  selectTotalPages,
} from "../../redux/selectors";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { AppDispatch } from "../../redux/store";
import styles from "./CatalogPage.module.css";

const CatalogPage: React.FC = () => {
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string>>(
    {}
  );
  const dispatch = useDispatch<AppDispatch>();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchCampers({ filters: appliedFilters, page: 1, limit: 4 }));
  }, [dispatch, appliedFilters]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(
        fetchCampers({
          filters: appliedFilters,
          page: currentPage + 1,
          limit: 4,
        })
      );
    }
  };

  const hasMoreItems = currentPage < totalPages;

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.sidebar}>
        <Filters onApplyFilters={(filters) => setAppliedFilters(filters)} />
      </div>
      <div className={styles.mainContent}>
        <CamperList campers={campers} />
        {loading && <p className={styles.loading}>Loading...</p>}
        {hasMoreItems && !loading && (
          <LoadMoreButton onLoadMore={handleLoadMore} />
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
