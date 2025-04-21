'use client';

import HeroSection from "@/components/HeroSection";
import CharactersSection from "@/components/CharactersSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import RoadmapSection from "@/components/RoadmapSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CharactersSection />
      <FeaturesSection />
      <TeamSection />
      <RoadmapSection />
    </main>
  );
}
