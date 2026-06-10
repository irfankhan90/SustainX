import type { Metadata } from "next";
import "./globals.css";

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
      className="font-sans"
    >
      <body>
        {children}
      </body>
    </html>
  );
}
