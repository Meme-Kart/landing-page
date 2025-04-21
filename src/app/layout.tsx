import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meme Kart - Web3 Racing Game",
  description:
    "A Web3 take on everyone's most beloved game franchise. Race, earn, and collect NFT characters in this exciting blockchain racing game.",
  openGraph: {
    title: "Meme Kart - Web3 Racing Game",
    description:
      "Race, earn, and collect NFT characters in this exciting blockchain racing game",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meme Kart - Web3 Racing Game",
    description:
      "Race, earn, and collect NFT characters in this exciting blockchain racing game",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
