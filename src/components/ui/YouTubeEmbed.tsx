"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
}

export default function YouTubeEmbed({
  videoId,
  title,
  className = "",
  autoplay = false,
  muted = true
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getEmbedUrl = () => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      controls: '1', // Show all YouTube controls
      modestbranding: '1', // Hide only YouTube logo
      rel: '0', // Don't show related videos
      showinfo: '1', // Show video title
      iv_load_policy: '1', // Enable annotations
      fs: '1', // Enable fullscreen button
      cc_load_policy: '1', // Enable captions
      color: 'white', // White progress bar
      playsinline: '1', // Play inline on mobile
      loop: '0',
      playlist: videoId,
      origin: window.location.origin, // Prevent navigation
      enablejsapi: '0', // Disable JavaScript API to prevent navigation
      widget_referrer: window.location.href // Set referrer to prevent navigation
    })

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative aspect-video bg-black rounded-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Thumbnail placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}

      {/* YouTube iframe */}
      {isLoaded && (
        <iframe
          src={getEmbedUrl()}
          title={title || "YouTube video"}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      )}
    </motion.div>
  )
} 