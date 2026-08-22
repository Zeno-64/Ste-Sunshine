import { AboutBlock } from "@/components/AboutBlock";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LatestProducts } from "@/components/LatestProducts";
import { SocialFeed } from "@/components/SocialFeed";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <LatestProducts />
        <CollectionsGrid />
        <AboutBlock />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
