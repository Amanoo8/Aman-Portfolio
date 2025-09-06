// app/page.tsx
"use client";

import Cards from "@/component/card"; // ✅ Make sure the folder is "components" not "component"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-indigo-900 to-black text-white">
      {/* HERO SECTION */}
      <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Floating gradient blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500 opacity-30 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-500 opacity-30 blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />

        {/* Hero Section Content */}
        <section className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-center md:text-left px-6 md:px-16">
          {/* Text Content */}
          <div>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Aman
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-2xl text-gray-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A passionate{" "}
              <span className="text-pink-400">BTEC Student</span> building
              the future with code & creativity.
            </motion.p>

            <motion.div
              className="mt-10 flex justify-center md:justify-start"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="/see"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition shadow-lg"
              >
                See My Work <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile Logo Image */}
          <motion.div
            className="relative group cursor-pointer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-full transition duration-500 group-hover:bg-gradient-to-tr group-hover:from-sky-400 group-hover:to-violet-600">
              <Image
                src="/a.png"
                alt="Aman's Logo"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </section>
      </main>

      {/* CARDS SECTION BELOW HERO */}
      <Cards />
    </div>
  );
}
