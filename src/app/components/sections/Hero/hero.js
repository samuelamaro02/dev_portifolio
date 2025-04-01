"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import LeadForm from '../../leadForm/LeadForm';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <div id="heroSection" className={styles.container}> 
        <div className={styles.heroContent}>
          <div>
            <h1>
              <span className={styles.accentText}>Oi, eu sou</span>{' '}
              Samuel Amaro.
              {' '}<span className={styles.accentText}>Dev Front-end & Webdesigner.</span>{' '}
            </h1>
            <p>
              Construo interfaces bonitas, rápidas e intuitivas para uma experiência digital eficiente e envolvente.
              <span className={styles.emphasisText}> A criatividade é meu framework.</span>
            </p>
            <div className={styles.containerForm}>
                    <LeadForm />
                    <Toaster richColors />
                </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero.webp"
              alt="ilustração"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
