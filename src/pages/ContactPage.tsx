"use client"

import { motion } from "framer-motion"
import ContactSection from "../components/sections/ContactSection"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <div className="page-header grid-bg">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start Your <span className="text-gradient">Project</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to bring your vision to life? Let's discuss your project and create something amazing together
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-white/20 to-white/60 rounded-full animate-pulse-glow"></div>
          </motion.div>
        </div>
      </div>
      <ContactSection />
    </motion.div>
  )
}
