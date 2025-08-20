import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          👋 Hi, I’m <span className="text-blue-400">Naveen Gupta</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          💻 Aspiring <span className="text-blue-300">Software Engineer</span> | Problem Solver | Cloud & Full-Stack Enthusiast
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/naveen-gupta-999688259/" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition">
            LinkedIn
          </a>
          <a href="mailto:naveen@example.com"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition">
            Contact
          </a>
        </div>
      </section>

      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
