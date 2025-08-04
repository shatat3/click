"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+", delay: 0.1 },
  { icon: Target, label: "Projects Completed", value: "1000+", delay: 0.2 },
  { icon: Award, label: "Awards Won", value: "50+", delay: 0.3 },
  { icon: Lightbulb, label: "Creative Ideas", value: "2000+", delay: 0.4 },
]

export default function AboutSection() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px'
  })

  return (
    <section ref={sectionRef} className="section-enhanced interactive-bg">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting <span className="text-gradient">Visual Stories</span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a passionate team of creative professionals dedicated to bringing your vision to life through
              stunning video production. From concept to final cut, we transform ideas into compelling visual stories.
            </motion.p>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Creative Excellence:</strong> Award-winning cinematography and storytelling
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Technical Expertise:</strong> State-of-the-art equipment and post-production
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Client Focus:</strong> Collaborative approach from concept to delivery
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 luxury-card-3d hover:shadow-glow-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-lg mb-4 shadow-glow-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
