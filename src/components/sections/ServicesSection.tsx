"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Shield, Globe, Smartphone } from "lucide-react"
import Card from "../ui/Card"

const services = [
  {
    icon: Code,
    title: "Modern Development",
    description: "Built with React 18+, TypeScript, and modern development practices for scalable applications.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted UI with Tailwind CSS and custom design system for stunning user experiences.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed with lazy loading, code splitting, and performance best practices.",
  },
  {
    icon: Shield,
    title: "Type Safety",
    description: "Full TypeScript support with strict typing for better code quality and developer experience.",
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Built-in SEO optimization with meta tags, structured data, and accessibility features.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all devices with mobile-first approach.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Template?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build modern, scalable, and beautiful web applications with the latest technologies
            and best practices.
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
