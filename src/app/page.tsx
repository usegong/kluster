import HomeDescription from "@/components/HomeDescription";
import HomeDescriptionBanner from "@/components/HomeDescriptionBanner";
import HomeFeature from "@/components/HomeFeature";
import HomeFootNote from "@/components/HomeFootNote";
import HomeHeroSection from "@/components/HomeHeroSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <div className="flex flex-col space-y-32">
        <HomeFeature />
        <HomeDescription />
        <HomeDescriptionBanner />
        <HomeFootNote />
      </div>
    </>
  );
}
