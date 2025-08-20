import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Naveen Gupta | Portfolio",
};

export default function HomePage() {
  return (

      <main className="bg-gray-900 text-white">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience & Certifications Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </main>
  );
}
    