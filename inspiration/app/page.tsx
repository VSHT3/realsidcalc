import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhyChooseMe } from "@/components/why-choose-me";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingContactButton } from "@/components/floating-contact-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </main>
  );
}
