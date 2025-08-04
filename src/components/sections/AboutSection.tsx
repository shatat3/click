"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Lightbulb } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Developers", value: "10K+" },
  { icon: Target, label: "Projects Built", value: "500+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Lightbulb, label: "Ideas Realized", value: "1000+" },
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Modern Development</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our template combines the latest technologies with proven patterns to help you build exceptional web
              applications. From small startups to enterprise solutions, we provide the foundation you need to succeed.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5b6135] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Developer Experience:</strong> Hot reload, TypeScript support, and modern tooling
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5b6135] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Performance:</strong> Optimized builds, lazy loading, and efficient rendering
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5b6135] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Scalability:</strong> Modular architecture and clean code organization
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 luxury-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#5b6135] to-[#8f9a6f] rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
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
