import {
  AboutSection,
  Footer,
  HeroSection,
  InterestsSection,
  NavBar,
} from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <InterestsSection />
      <Footer />
    </div>
  );
}
