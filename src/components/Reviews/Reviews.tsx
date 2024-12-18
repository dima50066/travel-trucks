import React from "react";
import styles from "./Reviews.module.css";
import Icon from "../../shared/Icons/Icon";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      const starType = i <= rating ? "star-filled" : "star";
      stars.push(
        <Icon
          width={16}
          height={16}
          key={i}
          id={starType}
          className={styles.star}
        />
      );
    }

    return stars;
  };

  return (
    <div className={styles.reviews}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className={styles.name}>{review.reviewer_name}</p>
              <div className={styles.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
