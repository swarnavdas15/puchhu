import LoveHeartBackground from "@/components/ui/LoveHeartBackground";
import HeroSection from "@/components/sections/HeroSection";
import RealizationSection from "@/components/sections/RealizationSection";
import GiftTimelineSection from "@/components/sections/GiftTimelineSection";
import ApologySection from "@/components/sections/ApologySection";
import ConfessionSection from "@/components/sections/ConfessionSection";
import CommitmentSection from "@/components/sections/CommitmentSection";
import ClosingSection from "@/components/sections/ClosingSection";
import HorizontalScroll from "@/components/sections/HorizontalScroll";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <LoveHeartBackground />
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
