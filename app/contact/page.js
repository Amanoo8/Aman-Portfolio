// app/contact/page.js
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-700 via-indigo-900 to-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-center text-gray-300"
        >
          Have a project in mind or just want to say hi? Drop me a message 🚀
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col gap-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition font-semibold text-lg shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </main>
  );
}
