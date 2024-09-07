import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { ModernMinimalistHeader } from "@/components/modern-minimalist-header";

export default function Home() {
  return (
    <>
      <ModernMinimalistHeader />
      <HeroSection />
      <AboutSection />
    </>
  );
}
