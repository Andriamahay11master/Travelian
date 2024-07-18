import type { Metadata } from "next";
import { Rubik, Playfair_Display } from "next/font/google";
import "./globals.scss";
import "@/assets/scss/main.scss";
import { CurrentHashProvider } from "./CurrentHashContext";

const rubik = Rubik({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const font = {
  rubik,
  playfair,
};

export const metadata: Metadata = {
  title: "Landing Page - Travelian: Your Gateway to Unforgettable Journeys",
  description: "Discover your next adventure with our curated travel guides, tips, and destination highlights. Plan your perfect getaway with expert advice, exclusive deals, and stunning visuals to inspire your wanderlust. Start exploring today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.rubik.className} suppressHydrationWarning={true}>
        <CurrentHashProvider>
          {children}
        </CurrentHashProvider>
      </body>
    </html>
  );
}
