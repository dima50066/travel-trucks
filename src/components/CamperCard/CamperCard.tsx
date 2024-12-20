import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slice";
import { Camper } from "../../types";
import Icon from "../../shared/Icons/Icon";
import styles from "./CamperCard.module.css";
import Button from "../../shared/Button/Button";
import { useNavigate } from "react-router-dom";
import FeatureIconsList from "../FeatureIconsList/FeatureIconsList";
import { selectFavorites } from "../../redux/selectors";

interface CamperCardProps {
  camper: Camper;
}

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camper.id);

  const iconId = useMemo(
    () => (isFavorite ? "heart-filled" : "heart-outline"),
    [isFavorite]
  );

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
                id={iconId}
                width={24}
                height={24}
                className={`${styles.heartIcon} ${
                  isFavorite ? styles.filled : ""
                }`}
                onClick={handleToggleFavorite}
              />
            </div>
          </div>
          <div className={styles.ratingLocation}>
            <span className={`${styles.textStyle}`}>
              <Icon id="star-filled" width={16} height={16} /> {camper.rating} (
              {camper.reviews.length} Reviews)
            </span>
            <span className={`${styles.textStyle}`}>
              <Icon id="map" width={16} height={16} /> {camper.location}
            </span>
          </div>
        </div>

        <p className={styles.description}>
          {camper.description?.length > 60
            ? `${camper.description.slice(0, 60)}...`
            : camper.description}
        </p>

        <FeatureIconsList features={camper} limit={5} />

        <Button
          text="Show more"
          className={styles.showMore}
          onClick={handleShowMore}
        />
      </div>
    </div>
  );
};

export default CamperCard;
