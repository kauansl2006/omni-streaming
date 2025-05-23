import { Manrope } from "next/font/google";

import "../styles/globals.css";

import { HeaderComponent } from "../components/Header";
import { FooterComponent } from "../components/Footer";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-manrope",
});

export const metadata = {
  title: "omni - get streaming now",
  description: "The best plataform to find movies and TV series.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
