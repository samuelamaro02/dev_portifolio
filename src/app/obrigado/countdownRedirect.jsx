"use client";
import { useEffect, useState } from "react";
import styles from "./countdownRedirect.module.css";
import { useRouter } from "next/navigation";

export default function Countdown() {
  const [count, setCount] = useState(5);
  const [progress, setProgress] = useState(100);
  const router = useRouter();

  useEffect(() => {
    if (count === 0) {
      //router.push("https://wa.me/seunumero"); // Altere para o seu link do WhatsApp
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
      setProgress((prev) => prev - 20);
    }, 1000);

    return () => clearInterval(interval);
  }, [count, router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.number}>{count}</h1>
      <p className={styles.text}>Redirecionando para o WhatsApp...</p>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
