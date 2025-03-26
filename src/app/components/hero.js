import styles from "./hero.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.container}> 
      <div className={styles.heroContent}>
        <div>
          <h1>
            <span className={styles.accentText}>Oi, eu sou</span>{' '}
            Samuel Amaro.
            {' '}<span className={styles.accentText}>Dev Front-end & Webdesigner.</span>{' '}
          </h1>
          <p>Transformo linhas de código em experiências fluidas e pixels em narrativas visuais. 
            Apaixonado por criar interfaces que não só funcionam, mas encantam. 
            <span className={styles.emphasisText}>Front-end é minha linguagem, mas a criatividade é meu framework.</span>
          </p>
          <a href="https://wa.me/5583998404188">Entrar em contato</a>
        </div>
        <div>
          <img 
              src="/icons/hero.svg"  
              className={styles.heroImage}
            />
          <img 
              src="/icons/heroMobile.svg"  
              className={styles.heroImageMobile}
            />
        </div>
      </div>
    </div>
    </>
  );
}