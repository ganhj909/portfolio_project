// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gan Hong Jian | Portfolio",
  description: "Full Stack Agency & Frontend Developer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};