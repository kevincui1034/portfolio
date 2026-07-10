import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kevincui.vercel.app";

const description =
  "Full-stack AI engineer in San Jose, California. I design and ship AI products end to end: autonomous agents, agentic workflows, RAG pipelines, and the LLM infrastructure underneath.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kevin Cui · Full-Stack AI Engineer",
    template: "%s · Kevin Cui",
  },
  description,
  applicationName: "Kevin Cui",
  authors: [{ name: "Kevin Cui", url: siteUrl }],
  creator: "Kevin Cui",
  publisher: "Kevin Cui",
  keywords: [
    "Kevin Cui",
    "AI Engineer",
    "Full-stack Engineer",
    "Agent Engineering",
    "Agentic Workflows",
    "RAG",
    "LLM Infrastructure",
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
    title: "Kevin Cui · Full-Stack AI Engineer",
    description,
    images: [
      {
        url: "/headshot.png",
        width: 1024,
        height: 1280,
        alt: "Kevin Cui — Full-Stack AI Engineer, San Jose CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Cui · Full-Stack AI Engineer",
    description,
    creator: "@kevincui_dev",
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
  jobTitle: "Full-Stack AI Engineer",
  description:
    "Full-stack AI engineer building autonomous agents, agentic workflows, RAG pipelines, and the LLM infrastructure that runs them.",
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
    "https://x.com/kevincui_dev",
    "https://www.instagram.com/aku.kevinc/",
    "https://www.tiktok.com/@kevincuidev",
  ],
  email: "mailto:kevincui1034@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
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
