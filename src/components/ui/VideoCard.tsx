"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Clock } from "lucide-react"
import { VideoItem } from "../../utils/videoData"
import VideoPlayerModal from "./VideoPlayerModal"

interface VideoCardProps {
  video: VideoItem
  delay?: number
}

export default function VideoCard({ video, delay = 0 }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVideoClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02 }}
        className="group cursor-pointer"
        onClick={handleVideoClick}
      >
        <div className="relative overflow-hidden rounded-2xl bg-black/20 border border-white/10 shadow-glow-white hover:shadow-glow-white-strong transition-all duration-300">
          {/* Thumbnail */}
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div class="text-white/50 text-4xl font-bold">${video.title.charAt(0)}</div>
                    </div>
                  `;
                }
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.div>
            </div>

            {/* Duration Badge */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
              <div className="flex items-center gap-1 text-white text-xs">
                <Clock className="w-3 h-3" />
                <span>{video.duration}</span>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300 line-clamp-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-all duration-300 line-clamp-2">
              {video.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoPlayerModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={video}
      />
    </>
  )
}
