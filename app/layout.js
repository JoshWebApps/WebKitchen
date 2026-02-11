import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import ReactLenis from "lenis/react";

import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata = {
  title: "Orm Bergold",
  description: "Orm Bergold, recycling specialists.",
};

export default function RootLayout({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.7,
        duration: 1,
        // touchMultiplier: 0,
        smoothTouch: false,
      }}
    >
      <html lang="en">
        <body className={`${aeonik.variable} antialiased`}>{children}</body>
      </html>
    </ReactLenis>
  );
}
