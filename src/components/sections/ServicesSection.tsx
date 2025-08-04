"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Shield, Globe, Smartphone } from "lucide-react"
import Card from "../ui/Card"

const services = [
  {
    icon: Code,
    title: "Commercial Production",
    description: "High-quality commercial videos that capture your brand's essence and drive engagement.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Expert creative direction and storytelling to bring your vision to life with stunning visuals.",
  },
  {
    icon: Zap,
    title: "Post-Production",
    description: "Professional editing, color grading, and visual effects to create polished final content.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control ensuring every frame meets our high standards of excellence.",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Content optimized for all platforms - TV, digital, social media, and streaming services.",
  },
  {
    icon: Smartphone,
    title: "Mobile Content",
    description: "Specialized content creation for mobile-first audiences and social media platforms.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Production Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to final delivery, we provide comprehensive video production services with cutting-edge
            technology and creative excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full" variant="3d" hover={true}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-white/20 to-white/10 rounded-lg shadow-glow-white">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
