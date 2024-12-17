import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button className={styles.button} onClick={handleButtonClick}>
          View Now
        </button>
      </div>
    </section>
  );
};

export default Home;
