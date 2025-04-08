// pages/_app.js
import CookieConsent from "react-cookie-consent";
import "../styles/globals.css"; 


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Aceito 🍪"
        declineButtonText="Recusar 😒"
        cookieName="cookie_consent_nextjs"
        style={{
          background: "#2B373B",
          color: "#fff",
          fontSize: "16px",
        }}
        buttonStyle={{
          color: "#fff",
          background: "#4CAF50",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "10px 20px",
        }}
        declineButtonStyle={{
          background: "#f44336",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "10px 20px",
        }}
        enableDeclineButton
        onAccept={(acceptedByScrolling) => {
          console.log("🍪 Consentido!", acceptedByScrolling);
        }}
        onDecline={() => {
          console.log("❌ Recusou os cookies.");
        }}
        expires={150}
      >
        Este site usa cookies para melhorar sua experiência. Aceita aí, vai! 😁
      </CookieConsent>
    </>
  );
}

export default MyApp;
