'use client';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/KartMeme_solana',
    hoverColor: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'Discord',
    url: '#',
    hoverColor: 'hover:text-[#7289DA]'
  },
  {
    name: 'Whitepaper',
    url: '#',
    hoverColor: 'hover:text-[#ff4d4d]'
  }
];

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#080816] text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={link.hoverColor}
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-sm text-gray-400">© 2024 Meme Kart. All rights reserved.</p>
    </footer>
  );
} 