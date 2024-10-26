import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card />
      </main>
    </div>
  );
}
