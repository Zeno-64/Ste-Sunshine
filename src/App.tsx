import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { IdeasGrid } from "@/components/IdeasGrid";
import { MissionBlock } from "@/components/MissionBlock";
import { OwnerStory } from "@/components/OwnerStory";
import { SocialFeed } from "@/components/SocialFeed";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <IdeasGrid />
        <OwnerStory />
        <MissionBlock />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
