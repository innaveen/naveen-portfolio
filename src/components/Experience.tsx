export default function Experience() {
  const experiences = [
    { title: "Internship at AWS & EduSkills Foundation", period: "2025", description: "Cloud Computing & AWS Architecture" },
  ];

  const certificates = [
    { name: "AWS Academy Cloud Foundation", link: "https://www.credly.com/badges/800eb6ef-97cc-4b2f-bebe-5ffe0d91178c/public_url" },
    { name: "AWS Academy Cloud Architecting", link: "https://www.credly.com/badges/4ea712a9-4b78-4275-9f21-119a9f631d42/public_url" },
    { name: "YBI AI & Data Skills", link: "https://foundationybi.trainercentralsite.in/certificate-validation?credentialId=480RME62UONU6" },
    { name: "YBI AI ML Fundamentals", link: "https://foundationybi.trainercentralsite.in/certificate-validation?credentialId=BGNPBNKCNE3GZ" },
    { name: "YBI Python Programming Fundamentals", link: "https://foundationybi.trainercentralsite.in/certificate-validation?credentialId=3F50BJGUHZ8Y4" },
    { name: "Wadhwani Foundation Employability Skills", link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67974e9497dbc8ee440a971a" },
    { name: "Altair Data Science Master", link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=dd5d7c05a304f8198d44233ffb4db5c9" },
  ];

  return (
    <section id="experience" className="px-8 py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">Experience & Certifications</h2>

        <div className="mb-12">
          {experiences.map((exp) => (
            <div key={exp.title} className="mb-6">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-gray-300">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-blue-300 mb-6">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              className="bg-gray-800 hover:bg-blue-500 transition-colors px-4 py-3 rounded-xl shadow-lg w-64"
            >
              {cert.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
