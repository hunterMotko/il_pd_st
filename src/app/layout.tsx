import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "IL Public Defender Stats",
  description: "Illinois Public Defender Statistics",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
