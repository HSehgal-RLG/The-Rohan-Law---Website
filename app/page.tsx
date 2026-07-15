import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import Services from "@/components/Services";
import EliteTitle from "@/components/EliteTitle";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <VideoSection />
      <Team />
      <Services />
      <EliteTitle />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
