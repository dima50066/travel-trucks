import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../redux/operations";
import { selectCamperDetails, selectLoading } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";
import styles from "./CamperDetailsPage.module.css";
import Icon from "../../shared/Icons/Icon";
import CamperDetailsContent from "../../components/CamperDetailsContent/CamperDetailsContent";

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

  if (loading) return <p className={styles.loader}>Loading...</p>;
  if (!camper) return <p className={styles.error}>Camper not found</p>;

  return (
    <section className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <h1 className={styles.title}>{camper.name}</h1>
        <div className={styles.priceLocation}>
          <span className={styles.rating}>
            <Icon id="star-filled" width={16} height={16} /> {camper.rating} (
            {camper.reviews.length} Reviews)
          </span>
          <span className={styles.location}>
            <Icon id="map" width={16} height={16} /> {camper.location}
          </span>
        </div>
        <span className={styles.price}>€{camper.price.toFixed(2)}</span>
      </div>

      <div className={styles.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`${camper.name} ${index}`}
          />
        ))}
      </div>

      <p className={styles.description}>{camper.description}</p>

      <div className={styles.tabs}>
        <span
          className={activeTab === "features" ? styles.activeTab : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </span>
        <span
          className={activeTab === "reviews" ? styles.activeTab : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </span>
      </div>

      <CamperDetailsContent camper={camper} activeTab={activeTab} />
    </section>
  );
};

export default CamperDetailsPage;
