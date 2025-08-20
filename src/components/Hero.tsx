"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaGraduationCap } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-8 py-16">
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hi, I’m <span className="text-blue-400">Naveen Gupta</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl font-light text-gray-300"
        >
          Aspiring Software Developer | Problem Solver | Tech Enthusiast
        </motion.h2>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-gray-300 text-md md:text-lg font-medium mt-2"
        >
          <FaGraduationCap className="text-blue-400" />
          <span>
            B.Tech in Computer Science & Engineering,{" "}<br></br>
            <a
              href="https://www.glbitm.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GL Bajaj Institute of Technology and Management, Greater Noida
            </a>{" "}<br></br>
            | Graduation Year: 2026
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 transition-colors px-6 py-3 rounded-2xl shadow-lg"
          >
            <FaDownload />
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-8 md:mt-0"
      >
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full border-4 border-blue-400 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
