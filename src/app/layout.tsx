import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Liquidity Protocol",
  description: "A decentralized liquidity protocol for the future of finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} !bg-[#000618] text-white min-h-screen flex flex-col relative`}>
        <div className="absolute inset-0 bg-[url('/star.svg')] bg-repeat opacity-100 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/clouds.svg')] bg-cover bg-no-repeat opacity-75 pointer-events-none"></div>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
