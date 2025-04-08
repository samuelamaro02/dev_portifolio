'use client';

import { useEffect } from "react";
import styles from "./obrigado.module.css";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import CountdownRedirect from "./countdownRedirect";
import Footer from "../components/layout/Footer/footer";
import { initFacebookPixel, trackEvent } from "@/lib/facebookPixel";
import { sendFbEvent } from "@/lib/facebookConversionApi";

const PIXEL_ID = '1337062430845620';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default function Obrigado() {
  useEffect(() => {
    let fbPixel;

    if (typeof window !== "undefined") {
      initFacebookPixel(PIXEL_ID).then((ReactPixel) => {
        fbPixel = ReactPixel;
        trackEvent(fbPixel, 'PageView');
        trackEvent(fbPixel, 'Lead');
      });

      const fbp = getCookie('_fbp') || '';
      const fbc = getCookie('_fbc') || '';

      sendFbEvent('PageView', { value: 0, currency: 'BRL' }, {
        client_user_agent: navigator.userAgent,
        fbp,
        fbc,
      });

      sendFbEvent('Lead', { value: 1, currency: 'BRL' }, {
        client_user_agent: navigator.userAgent,
        fbp,
        fbc,
      });
    }
  }, []);

  return (
    <>
      <div id="heroSection" className={styles.containerObrigado}>
        <div className={styles.heroObrigado}>
          <div className={styles.obrigadoCountdown}>
            <CountdownRedirect />
            <p>
              Se não for redirecionado automaticamente, clique no botão abaixo para acessar o nosso WhatsApp.
            </p>
            <a href="https://wa.me/5583998404188?text=Oi,%20quero%20conversar%20contigo%20%5Bseu%20assunto%5D.">
              <FaWhatsapp width={30} height={30} />
              Ir para WhatsApp
            </a>
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
