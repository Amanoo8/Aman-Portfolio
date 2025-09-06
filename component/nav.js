// components/Navbar.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-800/80 via-indigo-900/80 to-black/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Aman
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home Link */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-200 hover:text-white relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 transition-all group-hover:w-full"></span>
          </motion.a>

          {/* Contact Link */}
          <motion.a
            href="contact"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-200 hover:text-white relative group"
          >
            Contact Me
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 transition-all group-hover:w-full"></span>
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gradient-to-b from-indigo-900/95 to-black/95 px-6 py-6 flex flex-col gap-4"
          >
            {/* Home Link */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg text-gray-200 hover:text-white relative group"
              onClick={() => setIsOpen(false)}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 transition-all group-hover:w-full"></span>
            </motion.a>

            {/* Contact Link */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-lg text-gray-200 hover:text-white relative group"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 transition-all group-hover:w-full"></span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
