import React from "react";
import Icon from "../../shared/Icons/Icon";
import styles from "./FeatureIconsList.module.css";
import { Camper } from "../../types";

const featureIcons: Record<string, { id: string; label: string }> = {
  kitchen: { id: "kitchen", label: "Kitchen" },
  AC: { id: "AC", label: "AC" },
  bathroom: { id: "bathroom", label: "Bathroom" },
  TV: { id: "TV", label: "TV" },
  radio: { id: "radio", label: "Radio" },
  refrigerator: { id: "refrigerator", label: "Refrigerator" },
  microwave: { id: "microwave", label: "Microwave" },
  gas: { id: "gas", label: "Gas" },
  water: { id: "water", label: "Water" },
};

const engineIcons: Record<string, { id: string; label: string }> = {
  petrol: { id: "engine-petrol", label: "Petrol" },
  diesel: { id: "engine-diesel", label: "Diesel" },
  hybrid: { id: "engine-hybrid", label: "Hybrid" },
};

const transmissionIcons: Record<string, { id: string; label: string }> = {
  automatic: { id: "automatic", label: "Automatic" },
  manual: { id: "manual", label: "Manual" },
};

interface FeatureIconsListProps {
  features: Partial<Camper>;
  limit?: number;
  disableScroll?: boolean;
}

const FeatureIconsList: React.FC<FeatureIconsListProps> = ({
  features,
  limit = 5,
  disableScroll = false,
}) => {
  const activeFeatures = Object.entries(featureIcons)
    .filter(([key]) => features[key as keyof Camper])
    .slice(0, limit);

  const engineFeature = features.engine ? engineIcons[features.engine] : null;
  const transmissionFeature = features.transmission
    ? transmissionIcons[features.transmission]
    : null;

  return (
    <div
      className={`${styles.features} ${
        disableScroll ? styles.disableScroll : ""
      }`}
      aria-labelledby="feature-icons-list"
    >
      {activeFeatures.map(([key, feature]) => (
        <span
          key={key}
          className={styles.featureItem}
          aria-label={feature.label}
        >
          <Icon id={feature.id} width={20} height={20} />
          {feature.label}
        </span>
      ))}
      {engineFeature && (
        <span
          key="engine"
          className={styles.featureItem}
          aria-label={engineFeature.label}
        >
          <Icon id={engineFeature.id} width={20} height={20} />
          {engineFeature.label}
        </span>
      )}
      {transmissionFeature && (
        <span
          key="transmission"
          className={styles.featureItem}
          aria-label={transmissionFeature.label}
        >
          <Icon id={transmissionFeature.id} width={20} height={20} />
          {transmissionFeature.label}
        </span>
      )}
    </div>
  );
};

export default FeatureIconsList;
