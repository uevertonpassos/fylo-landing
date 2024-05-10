import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Getacess from "./components/GetAcess/Getacess";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fylo",
  description: "All your files in one secure location, accessible anywhere.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Header />{children} <Getacess /> <Footer /></body>
    </html>
  );
}
