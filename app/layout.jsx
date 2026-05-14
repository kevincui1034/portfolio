import { Manrope, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Kevin Cui · Software Engineer",
  description:
    "Full-stack software engineer based in San Jose, California. Building thoughtful products with intelligence quietly inside.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
