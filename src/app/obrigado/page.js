import styles from "./obrigado.module.css"
import Image from "next/image";
import CountdownRedirect from "./countdownRedirect";
import Footer from "../components/layout/Footer/footer";


export default function Obrigado() {
  return (
    <>
        <div id="heroSection" className={styles.container}> 
        <div className={styles.heroContent}>
          <div className={styles.obrigadoCountdown}>
            <h1>
              <CountdownRedirect/>
            </h1>
            <p>
              Se não for redirecionado automaticamente, clique no botão abaixo para acessar o nosso WhatsApp.
            </p>
            <a>Ir para WhatsApp</a>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/obrigado.webp"
              alt="ilustração"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
