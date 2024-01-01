import React from "react";

const badges = [
  "Freelance",
  "UI/UX",
  "System Design",
  "Data Scientist",
  "Cloud",
  "Product Management",
  "DevRel not really",
];

const Badges = () => {
  return (
    <div className="badge-carousel">
      <div className="relative flex overflow-hidden">
        <div
          className="animate-marquee1 whitespace-nowrap flex flex-row gap-12 mr-12"
          style={{ animationDuration: `${badges.length * 2}s` }}
        >
          <span></span>
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block text-2xl bg-dark border-[1px] border-white/50 px-16 py-2 mx-2 rounded-3xl"
            >
              {badge}
            </span>
          ))}
        </div>

        <div
          className="animate-marquee2 transition absolute top-0 whitespace-nowrap flex flex-row gap-12"
          style={{ animationDuration: `${badges.length * 2}s` }}
        >
          <span></span>
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block text-2xl bg-dark border-[1px] border-white/50 px-16 py-2 mx-2 rounded-3xl"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;
