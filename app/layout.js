import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NGO Hackathon Template",
  description: "A Next.js template for NGO-focused hackathon projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
