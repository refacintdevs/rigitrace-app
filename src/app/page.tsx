import { Nav } from "@/components/marketing/Nav";
import { Hero } from "@/components/marketing/Hero";
import { Stats } from "@/components/marketing/Stats";
import { Problem } from "@/components/marketing/Problem";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Categories } from "@/components/marketing/Categories";
import { Waitlist } from "@/components/marketing/Waitlist";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="grain">
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Categories />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}