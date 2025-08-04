"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Lightbulb } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Target, label: "Projects Completed", value: "1000+" },
  { icon: Award, label: "Awards Won", value: "50+" },
  { icon: Lightbulb, label: "Creative Ideas", value: "2000+" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Crafting Visual Stories</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We are a passionate team of creative professionals dedicated to bringing your vision to life through
              stunning video production. From concept to final cut, we transform ideas into compelling visual stories.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5b6135] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Creative Excellence:</strong> Award-winning cinematography and storytelling
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5b6135] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Technical Expertise:</strong> State-of-the-art equipment and post-production
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5b6135] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Client Focus:</strong> Collaborative approach from concept to delivery
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
