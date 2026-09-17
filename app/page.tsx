import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <CaseStudies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
