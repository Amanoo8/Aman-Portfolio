// components/Cards.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, GraduationCap } from "lucide-react";

const cards = [
  {
    title: "Coding",
    description: "Building creative projects with modern technologies.",
    icon: <Code2 className="w-10 h-10 text-pink-400" />,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Learning",
    description: "Exploring and mastering new concepts every day.",
    icon: <GraduationCap className="w-10 h-10 text-indigo-400" />,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Future Goals",
    description: "Aiming to innovate and contribute to the tech world.",
    icon: <Rocket className="w-10 h-10 text-green-400" />,
    gradient: "from-green-500 to-teal-600",
  },
];

export default function Cards() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Here’s a little about what I do and where I’m heading 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br ${card.gradient} transition transform hover:scale-105 cursor-pointer`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-6">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-100 text-base">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
