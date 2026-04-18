import { Nav } from "@/components/marketing/Nav";
import { Hero } from "@/components/marketing/Hero";
import { TrustStack } from "@/components/marketing/TrustStack";
import { Stats } from "@/components/marketing/Stats";
import { BrandPainPoints } from "@/components/marketing/BrandPainPoints";
import { PlatformPreview } from "@/components/marketing/PlatformPreview";
import { HeatmapPreview } from "@/components/marketing/HeatmapPreview";
import { Categories } from "@/components/marketing/Categories";
import { Pricing } from "@/components/marketing/Pricing";
import { Waitlist } from "@/components/marketing/Waitlist";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStack />
        <Stats />
        <BrandPainPoints />
        <PlatformPreview />
        <HeatmapPreview />
        <Categories />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}