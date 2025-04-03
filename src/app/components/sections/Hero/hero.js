"use client";
import styles from "./hero.module.css";
import LeadForm from "../../leadForm/LeadForm";
import { Toaster } from "sonner";

export default function Hero() {
  return (
    <div id="heroSection" className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroInfo}>
          <h1>
            <span className={styles.highlightText}>Oi, eu sou</span> Samuel Amaro.{" "}
            <span className={styles.highlightText}>Dev Front-end & Webdesigner.</span>
          </h1>
          <p>
            Construo interfaces bonitas, rápidas e intuitivas para uma experiência digital eficiente e envolvente.
            <span className={styles.emphasisText}> A criatividade é meu framework.</span>
          </p>
          <div className={styles.formContainer}>
            <LeadForm />
            <Toaster richColors />
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/hero.webp"
            alt="Ilustração"
            width={659}
            height={629}
          />
        </div>
      </div>
    </div>
  );
}
