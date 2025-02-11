import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";

// Set fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set metadata
export const metadata: Metadata = {
  title: "TerraNova Labs",
  description: "Revolutionizing how we build, power and connect The World.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
