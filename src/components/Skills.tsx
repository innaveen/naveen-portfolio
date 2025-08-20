import { FaReact, FaAws, FaGithub, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPython, SiC } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "AWS Cloud", icon: <FaAws className="text-orange-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
    { name: "Python", icon: <SiPython className="text-green-500 text-5xl" /> },
    { name: "C", icon: <SiC className="text-blue-600 text-5xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  ];

  return (
    <section id="skills" className="px-8 py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
              {skill.icon}
              <p className="text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
