"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { RootProvider } from "react-day-picker";
import Navbar from "@/components/Navbar";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { dark } from "@clerk/themes"
import { useTheme } from "@/components/theme-provider";

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

const metadata: Metadata = {
  title: "Moneymap",
  description: "A platform to map your money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const actualTheme = localStorage.getItem('theme')
    console.log(actualTheme)
    setTheme(theme || 'system')
  }, [theme])

  return (
      <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined
      }}
      >
        <html lang="en" suppressHydrationWarning>
        <RootProviders>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            <Toaster richColors position="bottom-right" />
            {children}
            
          </body>
          </RootProviders>
        </html>
      </ClerkProvider>
  );
}
