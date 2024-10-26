"use client";

import styles from "../page.module.css";
import RatingButton from "./RatingButton.js";
export default function Card() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className={styles.card}>
      <button className={styles.starButton}>★</button>
      <h1 className={styles.h1}>How did we do?</h1>
      <p className={styles.paragraph}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <RatingButton key={i + 1} starNumber={i + 1} />
        ))}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}
