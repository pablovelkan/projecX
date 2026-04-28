import Header from "@/pages/landing/sections/Header";
import Hero from "@/pages/landing/sections/Hero";
import EnemySection from "@/pages/landing/sections/EnemySection";
import SetupSection from "@/pages/landing/sections/SetupSection";
import IncludesSection from "@/pages/landing/sections/IncludesSection";
import ImplementationSection from "@/pages/landing/sections/ImplementationSection";
import GuaranteeSection from "@/pages/landing/sections/GuaranteeSection";
import RitualSection from "@/pages/landing/sections/RitualSection";
import ApplySection from "@/pages/landing/sections/ApplySection";
import LandingFooter from "@/pages/landing/sections/LandingFooter";

export default function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 text-ivory">
      <Header />

      <main>
        <Hero />
        <EnemySection />
        <SetupSection />
        <IncludesSection />
        <ImplementationSection />
        <GuaranteeSection />
        <RitualSection />
        <ApplySection />
        <LandingFooter />
      </main>
    </div>
  );
}

