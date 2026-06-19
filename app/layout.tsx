import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import MotionProvider from "@/components/MotionProvider";

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
  title: "The Rohan Law Group, P.C. | Brian P. Rohan, Esq. — Colonie, NY",
  description:
    "Brian P. Rohan, Esq. — The Rohan Law Group, P.C. Real estate, estate planning & administration, corporate & business, and traffic law throughout New York's Capital Region. Call (518) 438-0010.",
  openGraph: {
    title: "The Rohan Law Group, P.C. | Brian P. Rohan, Esq.",
    description:
      "Trusted legal counsel in real estate, estate planning & administration, corporate & business law, and traffic matters throughout New York's Capital Region. Call (518) 438-0010.",
    url: "https://www.rohanlaw.com",
    siteName: "The Rohan Law Group",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  verification: {
    google: "KPBsAvxfYVpLA9V9x289KIa04WDLmhMSyV5jfehKCkI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "The Rohan Law Group, P.C.",
  image: "https://www.rohanlaw.com/brian-rohan.jpeg",
  logo: "https://www.rohanlaw.com/logo-color.png",
  url: "https://www.rohanlaw.com",
  telephone: "+1-518-438-0010",
  faxNumber: "+1-518-438-0030",
  email: "BRohan@RohanLaw.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Computer Drive West, Suite 100",
    addressLocality: "Colonie",
    addressRegion: "NY",
    postalCode: "12205",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Brian P. Rohan",
    jobTitle: "Managing Partner",
    image: "https://www.rohanlaw.com/brian-rohan.jpeg",
  },
  areaServed: [
    "Albany County",
    "Saratoga County",
    "Warren County",
    "Rensselaer County",
    "Schenectady County",
  ],
  knowsAbout: [
    "Real Estate Law",
    "Title Services",
    "Estate Planning",
    "Estate Administration",
    "Corporate Law",
    "Business Formation",
    "Traffic Law",
  ],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
