import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <div className="page">
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <NavBar />
      <Hero />
      <LogoMarquee />
      <Services />
      <Showcase />
      <About />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
