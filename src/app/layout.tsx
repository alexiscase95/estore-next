import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import Header from "../components/Header";
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

// Define different metadata configurations for each theme
const theme = process.env.THEME || 'chevrolet';

const themeMetadata: Record<string, Metadata> = {
  chevrolet: {
    title: "Chevrolet Estore",
    description: "Welcome to the official Chevrolet Estore",
    icons: {
      icon: "/favicon-chevrolet.ico",
    },
  },
  gmc: {
    title: "GMC Estore",
    description: "Explore the latest from GMC Estore",
    icons: {
      icon: "/favicon-gmc.ico",
    },
  },
};

export const metadata: Metadata = themeMetadata[theme] || themeMetadata.chevrolet;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> 
        <main>{children}</main>
      </body>
    </html>
  );
}