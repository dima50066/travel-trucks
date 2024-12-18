import React from "react";
import { Camper } from "../../types";
import Icon from "../../shared/Icons/Icon";
import styles from "./CamperCard.module.css";
import Button from "../../shared/Button/Button";

interface CamperCardProps {
  camper: Camper;
}

const featureIcons: Record<string, { id: string; label: string }> = {
  kitchen: { id: "kitchen", label: "Kitchen" },
  AC: { id: "ac", label: "AC" },
  bathroom: { id: "bathroom", label: "Bathroom" },
  TV: { id: "tv", label: "TV" },
  radio: { id: "radio", label: "Radio" },
  refrigerator: { id: "refrigerator", label: "Refrigerator" },
  microwave: { id: "microwave", label: "Microwave" },
  gas: { id: "gas", label: "Gas" },
  water: { id: "water", label: "Water" },
};

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  const activeFeatures = Object.keys(featureIcons)
    .filter((key) => camper[key as keyof Camper] === true)
    .slice(0, 5);

  return (
    <div className={styles.camperCard}>
      <div className={styles.camperImage}>
        <img src={camper.gallery[0]?.thumb} alt={camper.name} />
      </div>
      <div className={styles.camperDetails}>
        <div className={styles.camperHeader}>
          <div className={styles.headWrapper}>
            <h3>{camper.name}</h3>
            <div className={styles.priceWrapper}>
              <span className={styles.price}>€{camper.price.toFixed(2)}</span>
              <Icon
                id="heart-outline"
                width={24}
                height={24}
                className={styles.heartIcon}
              />
            </div>
          </div>
          <div className={styles.ratingLocation}>
            <span className={styles.rating}>
              <Icon id="star-filled" width={16} height={16} /> {camper.rating} (
              {camper.reviews.length} Reviews)
            </span>
            <span className={styles.location}>
              <Icon id="map" width={16} height={16} /> {camper.location}
            </span>
          </div>
        </div>

        <p className={styles.description}>
          {camper.description?.length > 60
            ? `${camper.description.slice(0, 60)}...`
            : camper.description}
        </p>

        <div className={styles.features}>
          {activeFeatures.map((feature) => (
            <span key={feature} className={styles.featureItem}>
              <Icon id={featureIcons[feature].id} width={20} height={20} />{" "}
              {featureIcons[feature].label}
            </span>
          ))}
        </div>
        <Button text="Show more" className={styles.showMore} />
      </div>
    </div>
  );
};

export default CamperCard;
