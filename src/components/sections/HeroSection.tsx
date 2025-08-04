"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Button from "../ui/Button"

export default function HeroSection() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    // Aggressive autoplay strategy for mobile - Updated for deployment
    const playVideos = async () => {
      try {
        // Strategy 1: Direct play attempt with explicit mobile settings
        if (mobileVideoRef.current) {
          mobileVideoRef.current.currentTime = 0
          mobileVideoRef.current.muted = true
          mobileVideoRef.current.playsInline = true
          mobileVideoRef.current.autoplay = true
          mobileVideoRef.current.loop = true
          await mobileVideoRef.current.play()
          console.log('Mobile video autoplay successful')
          setIsVideoPlaying(true)
        }
        if (desktopVideoRef.current) {
          desktopVideoRef.current.currentTime = 0
          await desktopVideoRef.current.play()
          console.log('Desktop video autoplay successful')
        }
      } catch (error) {
        console.log('Direct autoplay failed, trying alternative methods:', error)
        
        // Strategy 2: Try with multiple delays and different approaches
        const tryDelayedPlay = async (delay: number) => {
          setTimeout(async () => {
            try {
              if (mobileVideoRef.current) {
                // Force reload and play
                mobileVideoRef.current.load()
                mobileVideoRef.current.muted = true
                mobileVideoRef.current.playsInline = true
                await mobileVideoRef.current.play()
                console.log(`Mobile video ${delay}ms delayed autoplay successful`)
                setIsVideoPlaying(true)
              }
              if (desktopVideoRef.current) {
                await desktopVideoRef.current.play()
                console.log(`Desktop video ${delay}ms delayed autoplay successful`)
              }
            } catch (delayError) {
              console.log(`${delay}ms delayed autoplay failed:`, delayError)
            }
          }, delay)
        }

        // Try multiple delay times with different strategies
        tryDelayedPlay(50)
        tryDelayedPlay(200)
        tryDelayedPlay(500)
        tryDelayedPlay(1000)
        tryDelayedPlay(2000)

        // Strategy 3: Try on page visibility change
        const handleVisibilityChange = async () => {
          if (!document.hidden) {
            try {
              if (mobileVideoRef.current) {
                mobileVideoRef.current.load()
                mobileVideoRef.current.muted = true
                mobileVideoRef.current.playsInline = true
                await mobileVideoRef.current.play()
                console.log('Mobile video visibility change autoplay successful')
                setIsVideoPlaying(true)
              }
              if (desktopVideoRef.current) {
                await desktopVideoRef.current.play()
                console.log('Desktop video visibility change autoplay successful')
              }
            } catch (visibilityError) {
              console.log('Visibility change autoplay failed:', visibilityError)
            }
          }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)

        // Strategy 4: Try on window focus
        const handleWindowFocus = async () => {
          try {
            if (mobileVideoRef.current) {
              mobileVideoRef.current.load()
              mobileVideoRef.current.muted = true
              mobileVideoRef.current.playsInline = true
              await mobileVideoRef.current.play()
              console.log('Mobile video window focus autoplay successful')
              setIsVideoPlaying(true)
            }
            if (desktopVideoRef.current) {
              await desktopVideoRef.current.play()
              console.log('Desktop video window focus autoplay successful')
            }
          } catch (focusError) {
            console.log('Window focus autoplay failed:', focusError)
          }
        }

        window.addEventListener('focus', handleWindowFocus)

        // Strategy 5: Try on any user interaction as last resort
        const handleUserInteraction = async () => {
          try {
            if (mobileVideoRef.current) {
              mobileVideoRef.current.load()
              mobileVideoRef.current.muted = true
              mobileVideoRef.current.playsInline = true
              await mobileVideoRef.current.play()
              console.log('Mobile video user interaction autoplay successful')
              setIsVideoPlaying(true)
            }
            if (desktopVideoRef.current) {
              await desktopVideoRef.current.play()
              console.log('Desktop video user interaction autoplay successful')
            }
            // Remove listeners after successful play
            document.removeEventListener('touchstart', handleUserInteraction)
            document.removeEventListener('click', handleUserInteraction)
            document.removeEventListener('keydown', handleUserInteraction)
            document.removeEventListener('scroll', handleUserInteraction)
            document.removeEventListener('mousemove', handleUserInteraction)
          } catch (interactionError) {
            console.log('User interaction autoplay failed:', interactionError)
          }
        }

        // Add more interaction events for mobile
        document.addEventListener('touchstart', handleUserInteraction, { once: true })
        document.addEventListener('click', handleUserInteraction, { once: true })
        document.addEventListener('keydown', handleUserInteraction, { once: true })
        document.addEventListener('scroll', handleUserInteraction, { once: true })
        document.addEventListener('mousemove', handleUserInteraction, { once: true })

        // Strategy 6: Try on DOM content loaded
        const handleDOMContentLoaded = async () => {
          try {
            if (mobileVideoRef.current) {
              mobileVideoRef.current.load()
              mobileVideoRef.current.muted = true
              mobileVideoRef.current.playsInline = true
              await mobileVideoRef.current.play()
              console.log('Mobile video DOM content loaded autoplay successful')
              setIsVideoPlaying(true)
            }
          } catch (domError) {
            console.log('DOM content loaded autoplay failed:', domError)
          }
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)
        } else {
          handleDOMContentLoaded()
        }

        // Cleanup
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange)
          window.removeEventListener('focus', handleWindowFocus)
          document.removeEventListener('touchstart', handleUserInteraction)
          document.removeEventListener('click', handleUserInteraction)
          document.removeEventListener('keydown', handleUserInteraction)
          document.removeEventListener('scroll', handleUserInteraction)
          document.removeEventListener('mousemove', handleUserInteraction)
          document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
        }
      }
    }

    // Try to play immediately when component mounts
    playVideos()

    // Also try when video is loaded
    const handleVideoLoad = () => {
      playVideos()
    }

    if (mobileVideoRef.current) {
      mobileVideoRef.current.addEventListener('loadeddata', handleVideoLoad)
    }
    if (desktopVideoRef.current) {
      desktopVideoRef.current.addEventListener('loadeddata', handleVideoLoad)
    }

    return () => {
      if (mobileVideoRef.current) {
        mobileVideoRef.current.removeEventListener('loadeddata', handleVideoLoad)
      }
      if (desktopVideoRef.current) {
        desktopVideoRef.current.removeEventListener('loadeddata', handleVideoLoad)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Border Line - Around Entire Section */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute inset-0 border-2 border-transparent">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-border-line-top shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-border-line-right shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-white to-transparent animate-border-line-bottom shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-transparent via-white to-transparent animate-border-line-left shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          className="hidden md:block w-full h-full object-cover"
          onError={(e) => console.error('Desktop video error:', e)}
          onLoadStart={() => console.log('Desktop video loading...')}
          onCanPlay={() => console.log('Desktop video can play')}
          onPlay={() => console.log('Desktop video playing')}
          onPause={() => console.log('Desktop video paused')}
          onLoadedData={() => console.log('Desktop video loaded')}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          className="block md:hidden w-full h-full object-cover"
          onError={(e) => console.error('Mobile video error:', e)}
          onLoadStart={() => console.log('Mobile video loading...')}
          onCanPlay={() => console.log('Mobile video can play')}
          onPlay={() => {
            console.log('Mobile video playing')
            setIsVideoPlaying(true)
          }}
          onPause={() => console.log('Mobile video paused')}
          onLoadedData={() => console.log('Mobile video loaded')}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Animated Background (fallback) */}
      <div className="absolute inset-0 gradient-bg opacity-10 z-0">
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5b6135]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#8f9a6f]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Centered Content - Only CTA Button */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-8 sm:py-12 lg:py-16"
        >
          {/* CTA Button - Hidden on mobile until video plays */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              display: isVideoPlaying ? 'block' : 'none'
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              display: { delay: 0.2 }
            }}
            className={`${isVideoPlaying ? 'block' : 'hidden md:block'}`}
          >
            <Button 
              size="lg" 
              variant="3d"
              className="group text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 shadow-glow-white-intense"
            >
              Click ! {/* Updated button text - deployment timestamp - Vercel force update */}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
