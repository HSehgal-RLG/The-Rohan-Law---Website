import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import EliteTitle from "@/components/EliteTitle";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <EliteTitle />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
