"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../page.module.css";
import RatingButton from "./RatingButton";

export default function Card() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Use this to access query params safely
  const [starRating, setStarRating] = useState(0);

  // Fetch initial star rating from URL if available
  useEffect(() => {
    const value = searchParams.get("value");
    if (value) {
      setStarRating(Number(value)); // Convert value to number if it exists
    }
  }, [searchParams]);

  const handleSubmit = () => {
    if (starRating === 0) {
      alert("Please select a rating");
      return;
    }
    router.push(`/thankYou?value=${starRating}`);
  };

  const handleRating = (rating) => {
    setStarRating(rating);
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
          <RatingButton
            key={i + 1}
            starNumber={i + 1}
            isActive={starRating === i + 1}
            handleClick={() => handleRating(i + 1)}
          />
        ))}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}
