import React from "react";
import Icon from "../../shared/Icons/Icon";
import styles from "./FeatureIconsList.module.css";
import { Camper } from "../../types";

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

interface FeatureIconsListProps {
  features: Camper;
  limit?: number;
}

const FeatureIconsList: React.FC<FeatureIconsListProps> = ({
  features,
  limit = 5,
}) => {
  const activeFeatures = Object.keys(featureIcons)
    .filter((key: keyof typeof featureIcons) => features[key as keyof Camper])
    .slice(0, limit);

  return (
    <div className={styles.features}>
      {activeFeatures.map((feature) => (
        <span key={feature} className={styles.featureItem}>
          <Icon id={featureIcons[feature].id} width={20} height={20} />{" "}
          {featureIcons[feature].label}
        </span>
      ))}
    </div>
  );
};

export default FeatureIconsList;
