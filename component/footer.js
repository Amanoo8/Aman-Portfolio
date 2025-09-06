// components/Footer.js
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Aman
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} Aman. All rights reserved.
          </p>
        </motion.div>

        {/* Right Side - Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all shadow-lg"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all shadow-lg"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-purple-600 transition-all shadow-lg"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
        </motion.div>
      </div>

      {/* Floating Animation Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-pink-600/30 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
    </footer>
  );
}
