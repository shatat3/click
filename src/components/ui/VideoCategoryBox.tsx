"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface VideoCategoryBoxProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  delay?: number
}

export default function VideoCategoryBox({ id, title, description, image, category, delay = 0 }: VideoCategoryBoxProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${category}/${id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-black/20 border border-white/10 shadow-glow-white hover:shadow-glow-white-strong transition-all duration-300">
        {/* Background Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div class="text-white/50 text-4xl font-bold">${title.charAt(0)}</div>
                  </div>
                `;
              }
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
          
                     {/* Content Overlay */}
           <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
             <motion.h3 
               className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: delay + 0.1 }}
             >
               {title}
             </motion.h3>
             <motion.p 
               className="text-sm text-gray-200 opacity-90 group-hover:opacity-100 transition-all duration-300 mb-4"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: delay + 0.2 }}
             >
               {description}
             </motion.p>
             
             
           </div>
        </div>
        
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
