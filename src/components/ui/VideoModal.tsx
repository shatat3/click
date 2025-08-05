"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { Client } from "../../types"
import YouTubeEmbed from "./YouTubeEmbed"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  client: Client | null
}

export default function VideoModal({ isOpen, onClose, client }: VideoModalProps) {
  const [videoId, setVideoId] = useState<string>("")

  useEffect(() => {
    if (client?.videoUrl) {
      // Extract video ID from YouTube URL
      const url = new URL(client.videoUrl)
      const videoIdParam = url.searchParams.get("v")
      if (videoIdParam) {
        setVideoId(videoIdParam)
      }
    }
  }, [client])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!client) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-black/90 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white">{client.name}</h2>
                <p className="text-gray-300 text-sm">{client.project}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full">
              {videoId ? (
                <YouTubeEmbed
                  videoId={videoId}
                  title={`${client.name} - ${client.project}`}
                  className="rounded-b-2xl"
                  autoplay={true}
                  muted={false}
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-gray-900 rounded-b-2xl">
                  <p className="text-gray-400">Loading video...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed">{client.description}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                <span>Category: {client.category}</span>
                <span>Year: {client.year}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 