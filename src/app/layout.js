import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { LoadingProvider } from "@/context/LoadingContext";
import GlobalLoader from "@/components/GlobalLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WorkHub",
  description: "Manage, Collaborate, Analyze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen bg-gray-50  `}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
