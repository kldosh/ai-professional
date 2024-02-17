import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/ui/Layout/navigation/NavBar";
import Footer from "@/app/ui/Layout/footer/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Professional",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen bg-black flex flex-col text-white relative`}
      >
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
