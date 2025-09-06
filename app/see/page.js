// app/seemywork/page.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my journey, skills, and creativity.",
    image: "/p1.png",
    link: "https://example.com",
  },
  {
    title: "E-Commerce App",
    description: "A responsive e-commerce application with payment integration.",
    image: "/P2.png",
    link: "https://example.com",
  },
  {
    title: "Blog Platform",
    description: "A blog platform with authentication and dynamic content.",
    image: "/p3.png",
    link: "https://example.com",
  },
];

export default function SeeMyWork() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white px-6 py-20 md:px-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
      >
        See My Work
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-300 text-lg md:text-xl text-center mt-6 max-w-2xl mx-auto"
      >
        Here are some of the projects I’ve built, combining creativity and
        technology ✨
      </motion.p>

      {/* Project Cards */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="bg-gradient-to-br from-indigo-800/60 to-purple-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>

            {/* Project Details */}
            <h2 className="text-2xl font-semibold mt-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <p className="text-gray-300 mt-2">{project.description}</p>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Visit Project <ArrowUpRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
