import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "GlobalPact SustainX — Empowering the Global Energy Transition",
  description: "GlobalPact SustainX is the AI-powered training & collaboration platform for clean energy — offering certified programs in Solar, Wind, EV, ESG, and Climate Finance. Strategy, Project Management, Turnkey Solutions, Capacity Building.",
  keywords: "sustainability, renewable energy, ESG, smart infrastructure, solar, wind, clean energy, training, GlobalPact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
