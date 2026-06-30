import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUMN | Designed to illuminate individuality",
  description:
    "LUMN is a premium clothing brand creating timeless essentials. Launching soon.",

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  openGraph: {
    title: "LUMN",
    description: "Designed to illuminate individuality.",
    siteName: "LUMN",
  },

  twitter: {
    card: "summary_large_image",
    title: "LUMN",
    description: "Designed to illuminate individuality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}