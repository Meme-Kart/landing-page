"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Main Logo */}
        <div className="w-full max-w-xl mb-12">
          <Image
            src="/banner.jpeg"
            alt="Meme Kart Logo"
            width={600}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title with glow effect */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-pixel mb-4 text-white glow-text">
          MEME KART
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-[#8f8fff] font-pixel">
          A Web3 Take on Everyone&apos;s Most Beloved Game Franchise
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button className="w-full sm:w-1/2 pixel-button bg-[#ff4d4d] hover:bg-[#ff6b6b] py-3 text-white font-pixel border-2 border-white">
            PLAY NOW
          </button>
          <button className="w-full sm:w-1/2 pixel-button bg-[#0a0a1f] hover:bg-[#1a1a4f] py-3 text-white font-pixel border-2 border-white">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
