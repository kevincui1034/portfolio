import DesignRuntime from "@/components/site/DesignRuntime";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Experience from "@/components/site/Experience";
import Education from "@/components/site/Education";
import Skills from "@/components/site/Skills";
import Highlights from "@/components/site/Highlights";
import Projects from "@/components/site/Projects";
import Contact from "@/components/site/Contact";

export default function HomePage() {
  return (
    <>
      <DesignRuntime />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Highlights />
      <Projects />
      <Contact />
    </>
  );
}
