import { Footer } from '@/components/footer/footer';
import { Cta } from '@/components/landing/Cta';
import { FAQ } from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';
import { Navbar } from '@/components/navigation/navbar';

export function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Cta />
      <FAQ />
      <Footer />
    </>
  );
}
