import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JSX } from "react/jsx-runtime";

// Import and configure the font
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Define metadata for the app
export const metadata: Metadata = {
  title: "Tre Colori",
  description: " Tre Colori || Fresh pasta & pizza",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
