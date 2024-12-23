import React from "react";
import styles from "./CamperDetailsContent.module.css";
import BookingForm from "../BookingForm/BookingForm";
import FeatureIconsList from "../FeatureIconsList/FeatureIconsList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import Reviews from "../Reviews/Reviews";
import { Camper } from "../../types";

interface CamperDetailsContentProps {
  camper: Camper;
  activeTab: "features" | "reviews";
}

const CamperDetailsContent: React.FC<CamperDetailsContentProps> = ({
  camper,
  activeTab,
}) => {
  return (
    <div className={styles.contentContainer}>
      <section className={styles.leftSection} aria-labelledby="details-heading">
        {activeTab === "features" && (
          <article className={styles.features}>
            <FeatureIconsList features={camper} limit={10} />
            <VehicleDetails
              form={camper.form}
              length={camper.length}
              width={camper.width}
              height={camper.height}
              tank={camper.tank}
              consumption={camper.consumption}
            />
          </article>
        )}
        {activeTab === "reviews" && (
          <section aria-labelledby="reviews-heading">
            <Reviews reviews={camper.reviews} />
          </section>
        )}
      </section>
      <aside className={styles.rightSection} aria-labelledby="booking-form">
        <BookingForm />
      </aside>
    </div>
  );
};

export default CamperDetailsContent;
