import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// This is an example of how you might structure your metadata
export const metadata: Metadata = {
  title: "Footprints Collective | Personalized Carbon Assessment Solutions for Businesses",
  description: "Empowering businesses with AI-driven carbon assessments and solutions to achieve net zero emissions. Start your journey towards sustainability today!",
  keywords: "carbon assessment, net zero, sustainability, eco solutions, carbon footprint, environmental impact, green technology",
  authors: [
    {
      name: "Allan Okoth",
      url: "https://yourwebsite.com", // Your website or profile link
    },
  ],
  openGraph: {
    title: "Footprints Collective | Personalized Carbon Assessment Solutions for Businesses",
    description: "Empowering businesses with AI-driven carbon assessments and solutions to achieve net zero emissions. Start your journey towards sustainability today!",
    url: "https://footprintcollective.com", // Your website URL
    siteName: "Footprints Collective",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/footprint-collective.appspot.com/o/Branding%2Flogo.png?alt=media&token=5545da2a-dfa7-4864-9ce5-18ec9086f317", // URL of the image for social sharing
        width: 1200,
        height: 630,
        alt: "Footprints Collective Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    site: "@YourTwitterHandle", // Your Twitter handle
    title: "Footprints Collective | Personalized Carbon Assessment Solutions for Businesses",
    description: "Empowering businesses with AI-driven carbon assessments and solutions to achieve net zero emissions. Start your journey towards sustainability today!",
    images: ["https://footprintcollective.com/twitter-image.jpg"], // URL of the image for Twitter sharing
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
