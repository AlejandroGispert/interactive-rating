"use client";
import styles from "../page.module.css";

export default function RatingButton({ starNumber }) {
  const handleClick = () => {
    alert(`Button ${starNumber} clicked!`);
  };
  return (
    <>
      <button className={styles.ratingButton} onClick={handleClick}>
        {starNumber}
      </button>
    </>
  );
}
