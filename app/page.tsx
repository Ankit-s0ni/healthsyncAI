import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import ProductDemo from '@/components/sections/product-demo';
import SocialProof from '@/components/sections/social-proof';
import Pricing from '@/components/sections/pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductDemo />
      <SocialProof />
      <Pricing />
      <Footer />
    </main>
  );
}