import type { Metadata } from "next";
import { Syne, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RIGITRACE — Endgame to Counterfeit",
    template: "%s · RIGITRACE",
  },
  description:
    "Nigeria's product authenticity verification platform. Scan any product. Know if it's real. In seconds.",
  keywords: [
    "product verification",
    "counterfeit",
    "NAFDAC",
    "Nigeria",
    "authenticity",
    "fake products",
    "brand protection",
  ],
  authors: [{ name: "RIGITRACE" }],
  creator: "RIGITRACE",
  metadataBase: new URL("https://rigitrace.vercel.app"),
  openGraph: {
    title: "RIGITRACE — Endgame to Counterfeit",
    description:
      "Scan any product. Know if it's real. In seconds. Nigeria's product authenticity verification platform.",
    url: "https://rigitrace.vercel.app",
    siteName: "RIGITRACE",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGITRACE — Endgame to Counterfeit",
    description:
      "Scan any product. Know if it's real. In seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#F8FAFC",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "light" }}>
      <body
        className={`${syne.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}