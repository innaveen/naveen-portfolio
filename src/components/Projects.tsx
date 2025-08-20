export default function Projects() {
  const projects = [
    {
      name: "CryptoPulse",
      description: "A cryptocurrency tracking and analytics platform.",
      link: "https://github.com/innaveen/CryptoPulse",
    },
    {
      name: "Campus Connect",
      description: "A platform to connect students and campus resources effectively.",
      link: "https://github.com/innaveen/CampusConnect",
    },
    {
      name: "Instant Blood Donor Finder",
      description: "A project to find blood donors quickly in your area.",
      link: "#", // replace with live/demo link if available
      status: "Working Upon",
    },
    {
      name: "SafeSight",
      description: "An AI-based CCTV project to detect crimes and weapons for better surveillance.",
      link: "#", // replace with live/demo link if available
      status: "Working Upon",
    },
  ];

  return (
    <section id="projects" className="px-8 py-20 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12 text-center">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {project.name} {project.status && <span className="text-yellow-400 text-base">({project.status})</span>}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
