import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
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

// Runs before first paint: tags the doc as JS-capable (gates reveal-hiding
// styles) and decides whether the boot intro shows this session. Must stay
// inline so there is no flash of unstyled/hidden state.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add("js");var rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!rm&&!sessionStorage.getItem("kc-boot")){d.classList.add("intro-pending");}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${archivo.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
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
