"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../page.module.css";
import RatingButton from "./RatingButton";
import Image from "next/image";
function CardContent() {
  const searchParams = useSearchParams();
  const [starRating, setStarRating] = useState(0);
  const router = useRouter();

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
      <button className={styles.starButton}>
        <Image
          src="/images/icon-star.svg"
          width={12}
          height={12}
          alt="star logo"
          className={styles.starButtonImage}
        />
      </button>
      <h1 className={styles.h1}>How did we do?</h1>
      <p className={styles.paragraph}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.ratingButtonContainer}>
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

export default function Card() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardContent />
    </Suspense>
  );
}
