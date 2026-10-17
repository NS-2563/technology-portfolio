import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
