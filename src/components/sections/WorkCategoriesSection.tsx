"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Video, Scissors, Calendar } from "lucide-react"
import Card from "../ui/Card"

const categories = [
  {
    icon: Video,
    title: "VFX",
    description: "Professional visual effects and post-production work",
    path: "/vfx",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Scissors,
    title: "Editing",
    description: "Creative video editing and post-production services",
    path: "/editing",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Event coverage and live production services",
    path: "/events",
    gradient: "from-green-500/20 to-emerald-500/20"
  }
]

export default function WorkCategoriesSection() {
  const navigate = useNavigate()

  const handleCardClick = (path: string) => {
    navigate(path)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Work Categories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our professional services across different creative disciplines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full cursor-pointer group" 
                variant="3d" 
                hover={true}
                onClick={() => handleCardClick(category.path)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{category.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/70 text-sm font-medium">Click to explore →</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 