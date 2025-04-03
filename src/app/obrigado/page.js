import styles from "./obrigado.module.css"
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import CountdownRedirect from "./countdownRedirect";
import Footer from "../components/layout/Footer/footer";


export default function Obrigado() {
  return (
    <>
        <div id="heroSection" className={styles.containerObrigado}> 
        <div className={styles.heroObrigado}>
          <div className={styles.obrigadoCountdown}>
              <CountdownRedirect/>
            <p>
              Se não for redirecionado automaticamente, clique no botão abaixo para acessar o nosso WhatsApp.
            </p>
            <a href="https://wa.me/5583998404188?text=Oi,%20quero%20conversar%20contigo%20%5Bseu%20assunto%5D."><FaWhatsapp width={30} height={30}/>Ir para WhatsApp</a>
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
