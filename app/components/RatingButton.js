"use client";
import styles from "../page.module.css";

export default function RatingButton({ starNumber, isActive, handleClick }) {
  return (
    <button
      className={`${styles.ratingButton} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
      aria-pressed={isActive}
    >
      {starNumber}
    </button>
  );
}
