"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "CryptoWizard",
    role: "Lead Developer",
    image: "/team/mem1.jpeg",
  },
  {
    name: "PixelMaster",
    role: "Lead Artist",
    image: "/team/mem2.png",
  },
  {
    name: "GameGuru",
    role: "Game Designer",
    image: "/team/mem3.png",
  },
  {
    name: "CommunityPro",
    role: "Community Manager",
    image: "/team/mem4.png",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="section-padding"
    >
      <h2 className="section-title glow-text">
        Our Team
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            <div className="team-image-container">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="team-image"
              />
            </div>
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
