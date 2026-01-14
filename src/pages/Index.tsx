import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/sections/HeroSection";
import RealizationSection from "@/components/sections/RealizationSection";
import GiftTimelineSection from "@/components/sections/GiftTimelineSection";
import ApologySection from "@/components/sections/ApologySection";
import ConfessionSection from "@/components/sections/ConfessionSection";
import CommitmentSection from "@/components/sections/CommitmentSection";
import ClosingSection from "@/components/sections/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      
      <main className="relative z-10">
        <HeroSection />
        <RealizationSection />
        <GiftTimelineSection />
        <ApologySection />
        <ConfessionSection />
        <CommitmentSection />
        <ClosingSection />
      </main>
    </div>
  );
};

export default Index;
