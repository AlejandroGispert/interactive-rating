"use client";
import styles from "../page.module.css";
import Image from "next/image";

export default function thankYou({ stars }) {
  return (
    <div className={styles.thankYouCardContainer}>
      <div className={styles.thanksCard}>
        <Image
          src={"/images/illustration-thank-you.svg"}
          width={150}
          height={100}
          alt="thank you image"
          className={styles.image}
        />
        <div className={styles.thanksDiv}>
          <p>You selected 4 out of 5</p>
        </div>
        <h1 className={styles.h1Thanks}>Thank You!</h1>
        <p className={styles.paragraph}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
