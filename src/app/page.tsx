"use client";

import HomeHero from "@/components/HomeHero";
import HomeAbout from "@/components/HomeAbout";
import HomeExpert from "@/components/HomeExpert";
import HomeService from "@/components/HomeService";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16">
      <HomeHero />
      <HomeAbout />
      <HomeService />
      <HomeExpert />
    </div>
  );
}

