import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../redux/operations";
import { selectCamperDetails, selectLoading } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";
import styles from "./CamperDetailsPage.module.css";
import Icon from "../../shared/Icons/Icon";
import CamperDetailsContent from "../../components/CamperDetailsContent/CamperDetailsContent";
import Loader from "../../shared/Loader/Loader";

const CamperDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const camper = useSelector(selectCamperDetails);
  const loading = useSelector(selectLoading);

  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );

  useEffect(() => {
    if (id) dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <div className={styles.loader} aria-live="polite">
        <Loader />
      </div>
    );

  if (!camper)
    return (
      <p className={styles.error} aria-live="assertive">
        Camper not found
      </p>
    );

  return (
    <section
      className={styles.detailsContainer}
      aria-label="Camper details page"
    >
      <div className={styles.detailsHeader} aria-labelledby="camper-title">
        <h1 id="camper-title" className={styles.title}>
          {camper.name}
        </h1>
        <div className={styles.priceLocation}>
          <span className={styles.rating}>
            <Icon id="star-filled" width={16} height={16} aria-hidden="true" />
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <span className={styles.location}>
            <Icon id="map" width={16} height={16} aria-hidden="true" />
            {camper.location}
          </span>
        </div>
        <span className={styles.price} aria-label="Price">
          €{camper.price.toFixed(2)}
        </span>
      </div>

      <div className={styles.gallery} aria-label="Camper image gallery">
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`${camper.name} image ${index + 1}`}
            aria-label={`Image ${index + 1} of ${camper.name}`}
          />
        ))}
      </div>

      <p className={styles.description} aria-label="Camper description">
        {camper.description}
      </p>

      <div
        className={styles.tabs}
        aria-label="Tab navigation for features and reviews"
      >
        <span
          className={activeTab === "features" ? styles.activeTab : ""}
          onClick={() => setActiveTab("features")}
          role="tab"
          aria-selected={activeTab === "features"}
        >
          Features
        </span>
        <span
          className={activeTab === "reviews" ? styles.activeTab : ""}
          onClick={() => setActiveTab("reviews")}
          role="tab"
          aria-selected={activeTab === "reviews"}
        >
          Reviews
        </span>
      </div>

      <CamperDetailsContent camper={camper} activeTab={activeTab} />
    </section>
  );
};

export default CamperDetailsPage;
