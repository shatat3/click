"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { getVideoCategoriesByType } from "../../utils/videoCategories"
import VideoCategoryBox from "../ui/VideoCategoryBox"

interface CategoryPageProps {
  category: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

export default function CategoryPage({ category, title, description, icon: Icon, gradient }: CategoryPageProps) {
  const navigate = useNavigate()
  const videoCategories = getVideoCategoriesByType(category)

  const handleBackClick = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <div className="container-custom pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>

          {/* Category Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex p-4 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg mb-6`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
          </div>

          {/* Video Category Boxes */}
          {videoCategories.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Explore Our <span className="text-gradient">Services</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Click on any category below to view related videos and projects
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoCategories.map((videoCategory, index) => (
                  <VideoCategoryBox
                    key={videoCategory.id}
                    {...videoCategory}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          )}


        </motion.div>
      </div>


    </div>
  )
} 