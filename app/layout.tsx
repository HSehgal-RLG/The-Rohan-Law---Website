import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rohanlaw.com"),
  title: "The Rohan Law Group | Albany, NY",
  description:
    "The Rohan Law Group — business, real estate, and technology transactional law in Albany, New York. Three decades of trusted counsel.",
  openGraph: {
    title: "The Rohan Law Group | Albany, NY",
    description:
      "The Rohan Law Group — business, real estate, and technology transactional law in Albany, New York. Three decades of trusted counsel.",
    url: "https://www.rohanlaw.com",
    siteName: "The Rohan Law Group",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  verification: {
    google: "KPBsAvxfYVpLA9V9x289Kla04WDLmhMSyV5jfehKCkl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
