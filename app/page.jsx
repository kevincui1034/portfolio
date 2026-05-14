import AmbientAtmosphere from "@/components/site/AmbientAtmosphere";
import Cursor from "@/components/site/Cursor";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Experience from "@/components/site/Experience";
import Projects from "@/components/site/Projects";
import Skills from "@/components/site/Skills";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";

export default function HomePage() {
  return (
    <>
      <AmbientAtmosphere />
      <Cursor />
      <Reveal />
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
