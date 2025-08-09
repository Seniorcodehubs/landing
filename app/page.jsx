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
import Script from "next/script";

export default function Page() {
  return (
    <div className="page">
      <link rel="icon" href="/seo/icon.svg" type="image/svg+xml" />
      <link rel="manifest" href="/seo/manifest.webmanifest" />
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Senior CodeHub",
          url: "https://seniorcodehub.dev/",
          description:
            "Senior-level engineering and AI consultancy. We architect, build, and launch AI-first products with precision.",
          areaServed: "Global",
          sameAs: ["https://x.com/", "https://www.linkedin.com/"],
          serviceType: [
            "AI Strategy",
            "LLM Integration",
            "MLOps",
            "Platform Engineering",
            "Cloud Architecture",
          ],
        })}
      </Script>
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
