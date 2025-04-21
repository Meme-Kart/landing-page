'use client';

const roadmapItems = [
  {
    phase: 'Q1 2024 - Genesis',
    items: [
      'Launch NFT character collection',
      'Release game demo',
      'Community building'
    ]
  },
  {
    phase: 'Q2 2024 - Expansion',
    items: [
      'Launch beta version',
      'Implement token mechanics',
      'First tournament'
    ]
  },
  {
    phase: 'Q3 2024 - Full Release',
    items: [
      'Full game launch',
      'Marketplace integration',
      'Cross-chain expansion'
    ]
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12">Roadmap</h2>
      <div className="max-w-4xl mx-auto">
        {roadmapItems.map((item, index) => (
          <div key={item.phase} className="roadmap-item flex items-start gap-4 mb-12 last:mb-0">
            <div className="roadmap-point w-8 h-8 bg-[#ff4d4d] rounded-full flex-shrink-0 mt-1"></div>
            <div>
              <h3 className="text-xl sm:text-2xl mb-2">{item.phase}</h3>
              <ul className="list-disc list-inside text-[#8f8fff] space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 