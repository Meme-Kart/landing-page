'use client';

const features = [
  {
    icon: '🏎️',
    title: 'Play-to-Earn Racing',
    description: 'Compete in exciting races and earn $MEME tokens'
  },
  {
    icon: '🎮',
    title: 'NFT Characters',
    description: 'Own and trade unique meme characters'
  },
  {
    icon: '🌟',
    title: 'Custom Tracks',
    description: 'Race on community-created tracks'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <h2 className="section-title glow-text">Game Features</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div 
            key={feature.title}
            className="feature-card"
          >
            <h3 className="feature-title">{feature.icon} {feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 