'use client';

import Image from 'next/image';

const characters = [
  { name: 'DOGE', type: 'Speed Demon', image: '/characters/doge.png' },
  { name: 'PEPE', type: 'Drift King', image: '/characters/pepe.png' },
  { name: 'SHIBA', type: 'Power Racer', image: '/characters/shiba.png' },
  { name: 'MONKE', type: 'Trick Master', image: '/characters/monke.png' },
  { name: 'CAT', type: 'Stealth Runner', image: '/characters/cat.png' },
];

export default function CharactersSection() {
  return (
    <section id="characters" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#12123e]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12">Meet The Racers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {characters.map((character) => (
          <div key={character.name} className="character-card">
            <div className="aspect-square relative overflow-hidden">
              <Image 
                src={character.image}
                alt={character.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="character-name">{character.name}</h3>
            <p className="character-type">{character.type}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-12">
        <p className="text-[#8f8fff] mb-6 max-w-2xl mx-auto px-4">
          Each character comes with unique abilities and racing styles. Collect them all to dominate the track!
        </p>
        <button className="pixel-button bg-[#1a1a4f] hover:bg-[#2a2a6f] px-6 py-2 w-full sm:w-auto">
          View All Characters
        </button>
      </div>
    </section>
  );
} 