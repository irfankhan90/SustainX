import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobalPact SustainX — Empowering the Global Energy Transition",
  description: "GlobalPact SustainX is the AI-powered clean energy transition partner, offering certified upskilling programs (Solar, Wind, EV, ESG, Climate Finance), Strategic Advisory, PMC, and Turnkey EPC Solutions.",
  keywords: "Sustainability, Clean Energy, Energy Transition, Renewable Energy, Strategic Advisory, Decarbonization, Energy Trading, Sustainable Development, Solar Design, Wind Feasibility, PVsyst, HOMER, ESG Audit",
  authors: [{ name: "GlobalPact SustainX" }],
  metadataBase: new URL("https://frontend-gamma-blond-69.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GlobalPact SustainX — Empowering the Global Energy Transition",
    description: "GlobalPact SustainX is the clean energy transition partner. We bridge strategy & execution through Advisory, PMC, Turnkey Solutions, and Capacity Building.",
    url: "/",
    siteName: "GlobalPact SustainX",
    images: [
      {
        url: "/sustainability_hero.png",
        width: 1200,
        height: 630,
        alt: "GlobalPact SustainX Clean Energy Grid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalPact SustainX — Empowering the Global Energy Transition",
    description: "Bridging strategy and execution for utility scale renewable energy assets.",
    images: ["/sustainability_hero.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GlobalPact SustainX",
  "url": "https://frontend-gamma-blond-69.vercel.app/",
  "logo": "https://frontend-gamma-blond-69.vercel.app/logo.jpg",
  "description": "GlobalPact SustainX is an AI-powered clean energy transition partner providing strategic advisory, project management, and turnkey solutions.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-22-40167394",
    "contactType": "customer support",
    "email": "sustainx@globalpactholdings.in"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-101/102, Grenville, Near Lokhandwala Club, Lokhandwala Complex, Andheri West",
    "addressLocality": "Mumbai",
    "postalCode": "400053",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/globalpactsustainx/",
    "https://www.facebook.com/GlobalPactSustainX",
    "https://x.com/globalSustainx",
    "https://www.instagram.com/globalpactsustainx/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-sans"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-brand-g focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

