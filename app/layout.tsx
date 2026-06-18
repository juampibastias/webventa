import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/content";

const GA_ID = "G-92J5QGDQ16";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "desarrollo web",
    "diseño web",
    "desarrollo web freelance",
    "programador full stack",
    "aplicaciones web a medida",
    "desarrollo Next.js",
    "aplicaciones a medida LATAM",
    "e-commerce Mercado Pago",
    "implementación de IA empresas",
    "software a medida",
    "Next.js developer",
    "landing page profesional",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  verification: {
    google: "Z9-ol2qNH4Q2gXNj_WXpkABfh_UtOvQbZ140vuKtKx8",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.fullName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  areaServed: ["AR", "UY", "CL", "MX", "CO", "PE"],
  knowsAbout: ["Desarrollo web", "Next.js", "E-commerce", "Inteligencia Artificial", "Mercado Pago"],
  sameAs: [
    "https://www.linkedin.com/in/juanpedrobastiastorresi",
    "https://github.com/juampibastias",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-ink text-slate-200 selection:bg-brand-500">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}
