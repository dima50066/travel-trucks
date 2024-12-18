import React from "react";
import styles from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  onLoadMore: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onLoadMore }) => {
  return (
    <div className={styles.loadMoreContainer}>
      <button className={styles.loadMore} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
