import { Sora } from "next/font/google";
import "./styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Samuel Amaro",
  description: "Samuel Amaro - Webdesigner e Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}