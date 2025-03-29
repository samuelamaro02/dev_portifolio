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
              Apaixonado por criar interfaces que não só funcionam, mas encantam. 
              <span className={styles.emphasisText}>Front-end é minha linguagem, mas a criatividade é meu framework.</span>
            </p>
            <div className={styles.containerForm}>
                    <LeadForm />
                    <Toaster richColors />
                </div>
          </div>
          <div>
            <Image 
              src="/icons/hero.svg"  
              className={styles.heroImage}
              alt="Ilustração representando desenvolvimento web"
              width={500} 
              height={500} 
              priority
            />
            <Image 
              src="/icons/heroMobile.svg"  
              className={styles.heroImageMobile}
              alt="Ilustração para dispositivos móveis"
              width={300} 
              height={300} 
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
