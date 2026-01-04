import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiv Construction - Building Your Dreams",
  description:
    "Professional construction services with quality craftsmanship and reliable service. Your trusted partner for all construction needs.",
  icons: {
    icon: [
      { url: "/logo.JPG", type: "image/jpeg" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/logo.JPG", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
