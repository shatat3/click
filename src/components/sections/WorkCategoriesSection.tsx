"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Video, Scissors, Calendar } from "lucide-react"
import Card from "../ui/Card"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"

const categories = [
  {
    icon: Video,
    title: "VFX",
    description: "Professional visual effects and post-production work",
    path: "/vfx",
    gradient: "from-purple-500/20 to-pink-500/20",
    delay: 0.1
  },
  {
    icon: Scissors,
    title: "Editing",
    description: "Creative video editing and post-production services",
    path: "/editing",
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0.2
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Event coverage and live production services",
    path: "/events",
    gradient: "from-green-500/20 to-emerald-500/20",
    delay: 0.3
  }
]

export default function WorkCategoriesSection() {
  const navigate = useNavigate()
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px'
  })

  const handleCardClick = (path: string) => {
    navigate(path)
  }

  return (
    <section ref={sectionRef} className="section-enhanced interactive-bg">
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
            Our <span className="text-gradient">Work Categories</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our professional services across different creative disciplines and discover how we bring your vision to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: category.delay }}
            >
              <Card 
                className="p-8 h-full cursor-pointer group" 
                variant="3d" 
                hover={true}
                onClick={() => handleCardClick(category.path)}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{category.description}</p>
                  <motion.div 
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white/70 text-sm font-medium">Click to explore →</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 