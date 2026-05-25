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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kevincui.vercel.app";

const description =
  "Full-stack software engineer in San Jose, California. Building thoughtful products with intelligence quietly inside.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kevin Cui · Software Engineer",
    template: "%s · Kevin Cui",
  },
  description,
  applicationName: "Kevin Cui",
  authors: [{ name: "Kevin Cui", url: siteUrl }],
  creator: "Kevin Cui",
  publisher: "Kevin Cui",
  keywords: [
    "Kevin Cui",
    "Software Engineer",
    "Full-stack Engineer",
    "AI Engineer",
    "Agent Engineering",
    "San Jose",
    "California",
    "Next.js",
    "Portfolio",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kevin Cui",
    title: "Kevin Cui · Software Engineer",
    description,
    images: [
      {
        url: "/headshot.png",
        width: 1024,
        height: 1280,
        alt: "Kevin Cui — Software Engineer, San Jose CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Cui · Software Engineer",
    description,
    creator: "@kevincui_ai",
    images: ["/headshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Cui",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Full-stack software engineer focused on AI and agent product work.",
  image: `${siteUrl}/headshot.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Jose",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/kevincui1034",
    "https://www.linkedin.com/in/kevincui-datascientist/",
    "https://x.com/kevincui_ai",
  ],
  email: "mailto:kevincui1034@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
