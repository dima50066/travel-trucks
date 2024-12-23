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

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(camper.id);

  const iconId = useMemo(
    () => (isFavorite ? "heart-filled" : "heart-outline"),
    [isFavorite]
  );

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className={styles.camperCard}>
      <div className={styles.camperImage}>
        <img src={camper.gallery[0]?.thumb} alt={camper.name} />
      </div>
      <section className={styles.camperDetails}>
        <header className={styles.camperHeader}>
          <div className={styles.headWrapper}>
            <h3 title={camper.name}>{truncateText(camper.name, 20)}</h3>
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
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              />
            </div>
          </div>
          <ul className={styles.ratingLocation}>
            <li
              className={styles.textStyle}
              aria-label={`Rating: ${camper.rating} out of 5`}
            >
              <Icon id="star-filled" width={16} height={16} /> {camper.rating} (
              {camper.reviews.length} Reviews)
            </li>
            <li
              className={styles.textStyle}
              aria-label={`Location: ${camper.location}`}
            >
              <Icon id="map" width={16} height={16} /> {camper.location}
            </li>
          </ul>
        </header>
        <p className={styles.description}>
          {truncateText(camper.description, 60)}
        </p>
        <FeatureIconsList features={camper} limit={5} disableScroll />
        <Button
          text="Show more"
          className={styles.showMore}
          onClick={handleShowMore}
          aria-label={`Show more details for ${camper.name}`}
        />
      </section>
    </div>
  );
};

export default CamperCard;
