"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Shield, Globe, Smartphone } from "lucide-react"
import Card from "../ui/Card"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"

const services = [
  {
    icon: Code,
    title: "Commercial Production",
    description: "High-quality commercial videos that capture your brand's essence and drive engagement.",
    delay: 0.1
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Expert creative direction and storytelling to bring your vision to life with stunning visuals.",
    delay: 0.2
  },
  {
    icon: Zap,
    title: "Post-Production",
    description: "Professional editing, color grading, and visual effects to create polished final content.",
    delay: 0.3
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control ensuring every frame meets our high standards of excellence.",
    delay: 0.4
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Content optimized for all platforms - TV, digital, social media, and streaming services.",
    delay: 0.5
  },
  {
    icon: Smartphone,
    title: "Mobile Content",
    description: "Specialized content creation for mobile-first audiences and social media platforms.",
    delay: 0.6
  },
]

export default function ServicesSection() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px'
  })

  return (
    <section ref={sectionRef} className="section-enhanced particles-bg">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our <span className="text-gradient">Production Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From concept to final delivery, we provide comprehensive video production services with cutting-edge
            technology and creative excellence.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              <Card className="p-6 h-full group" variant="3d" hover={true}>
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-gradient-to-r from-white/20 to-white/10 rounded-lg shadow-glow-white group-hover:shadow-glow-white-strong transition-all duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
