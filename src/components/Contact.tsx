import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-8 py-20 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-8">
          Feel free to reach out for collaborations, projects, or just a friendly chat!
        </p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* Gmail Compose Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=i.guptanaveen@gmail.com&su=Hello%20Naveen&body=Hi%20Naveen,%0D%0A%0D%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-blue-500 transition-colors px-6 py-3 rounded-2xl shadow-lg"
          >
            <FaEnvelope className="text-white text-xl" />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/naveen-gupta-999688259/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-blue-500 transition-colors px-6 py-3 rounded-2xl shadow-lg"
          >
            <FaLinkedin className="text-white text-xl" />
            LinkedIn
          </a>

          <a
            href="https://github.com/innaveen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-blue-500 transition-colors px-6 py-3 rounded-2xl shadow-lg"
          >
            <FaGithub className="text-white text-xl" />
            GitHub
          </a>

          {/* Resume Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-blue-500 transition-colors px-6 py-3 rounded-2xl shadow-lg"
          >
            <FaFilePdf className="text-white text-xl" />
            Resume
          </a>
        </div>

        {/* Contact Form */}
        <form
          id="contact-form"
          action="https://formspree.io/f/xeozbprd"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
