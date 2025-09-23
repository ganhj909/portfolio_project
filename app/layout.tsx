import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gan Hong Jian | Frontend Development | Full Stack Agency",
  description: "Full Stack Angency & Frontend Developer with expertise in Next.js, React, and Blockchain technologies.",
  metadataBase: new URL("https://ganhjworks.com"),
  
  // Basic metadata
  applicationName: "Gan Hong Jian Portfolio",
  authors: [{ name: "Gan Hong Jian" }],
  keywords: ["Full Stack Agency", "Web3", "Blockchain", "Next.js", "React", "Frontend development"],
  
  openGraph: {
    type: "website",
    url: "https://ganhjworks.com",
    title: "Gan Hong Jian | Frontend Development | Full Stack Agency",
    description: "Full Stack Agency & Blockchain and Frontend Developer with expertise in Next.js, React, and Blockchain technologies.",
    siteName: "Gan Hong Jian",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gan Hong Jian - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://ganhjworks.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}