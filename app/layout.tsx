import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopBoard from "@/components/TopBoard";
import BottomNavBar from "@/components/BottomNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "로나보드",
    template: "%s",
  },
  description: "라디언트4 통제,공지 통합 정보판",
  themeColor: "#232323",
  other: {
    "google-site-verification": "VUhALrgfBxRxPoIE5nbzM9CvOVnRPn4rMGUHWDOk38w",
    "naver-site-verification": "a810533e5e2ff9dcd1bfab54163fd77e48c794d2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <TopBoard />
        {children}
        <Analytics />
        <BottomNavBar />
        <Script src='/service-worker.js' />
      </body>
    </html>
  );
}
