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
          aria-hidden="true"
        />
      );
    }

    return stars;
  };

  return (
    <section className={styles.reviews} aria-labelledby="reviews-heading">
      {reviews.map((review, index) => (
        <article key={index} className={styles.review}>
          <header className={styles.header}>
            <div className={styles.avatar} aria-hidden="true">
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className={styles.name}>{review.reviewer_name}</p>
              <div
                className={styles.stars}
                aria-label={`Rating: ${review.reviewer_rating} out of 5`}
              >
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </header>
          <p className={styles.comment}>{review.comment}</p>
        </article>
      ))}
    </section>
  );
};

export default Reviews;
