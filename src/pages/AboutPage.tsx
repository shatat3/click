"use client"

import { motion } from "framer-motion"
import AboutSection from "../components/sections/AboutSection"

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <div className="page-header interactive-bg">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-gradient">Click</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are storytellers, visionaries, and creators who transform ideas into compelling visual narratives
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
      <AboutSection />
    </motion.div>
  )
}
