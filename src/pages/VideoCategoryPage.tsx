"use client"

import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { getVideoCategoriesByType } from "../utils/videoCategories"
import { getVideosByCategory } from "../utils/videoData"
import VideoCard from "../components/ui/VideoCard"

export default function VideoCategoryPage() {
  const { category, id } = useParams()
  const navigate = useNavigate()
  
  const videoCategories = getVideoCategoriesByType(category || '')
  const currentCategory = videoCategories.find(cat => cat.id === id)
  const videos = getVideosByCategory(category || '', id)
  
  // Debug logging
  console.log('=== DEBUG INFO ===')
  console.log('Category:', category)
  console.log('Subcategory ID:', id)
  console.log('Video Categories:', videoCategories)
  console.log('Current Category:', currentCategory)
  console.log('Videos found:', videos)
  console.log('All videos for category:', getVideosByCategory(category || ''))
  console.log('==================')
  


  const handleBackClick = () => {
    navigate(`/${category}`)
  }

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Category Not Found</h1>
          <button
            onClick={handleBackClick}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
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
            <span className="text-sm font-medium">Back to {category}</span>
          </button>

          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl shadow-lg mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">{currentCategory.title.charAt(0)}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentCategory.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{currentCategory.description}</p>
          </div>

          {/* Videos Grid */}
          <div className="text-center mb-4 text-white">
            <p>Debug: Found {videos.length} videos</p>
            <p>Videos: {JSON.stringify(videos.map(v => v.title))}</p>
          </div>
          
          {videos.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Available <span className="text-gradient">Videos</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Click on any video to watch it in full screen
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div key={video.id}>
                    <VideoCard video={video} delay={index * 0.1} />
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-gray-400 mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">{currentCategory.title.charAt(0)}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">No Videos Available</h2>
                <p className="text-lg text-gray-300 mb-6">
                  We're currently working on adding videos for this category.
                </p>
                <p className="text-sm text-gray-400">
                  Check back soon to see our latest work in {currentCategory.title.toLowerCase()}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
