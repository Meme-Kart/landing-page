"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Meme Kart"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <span className="text-white font-pixel text-sm hidden md:block">
                MEME KART
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[rgb(var(--accent))] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/characters" className="header-link">
              Characters
            </Link>
            <Link href="/tracks" className="header-link">
              Tracks
            </Link>
            <Link href="/leaderboard" className="header-link">
              Leaderboard
            </Link>
            <Link href="/about" className="header-link">
              About
            </Link>
            <button className="pixel-button bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))] text-white">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-[var(--header-height)] left-0 right-0 bg-[rgba(var(--background),0.95)] backdrop-blur-md border-t border-white/10 md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/characters"
                className="header-link block px-3 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Characters
              </Link>
              <Link
                href="/tracks"
                className="header-link block px-3 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Tracks
              </Link>
              <Link
                href="/leaderboard"
                className="header-link block px-3 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                href="/about"
                className="header-link block px-3 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button
                className="w-full mt-4 pixel-button bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))] text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
