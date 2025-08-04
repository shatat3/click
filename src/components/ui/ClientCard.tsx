"use client"

import { motion } from "framer-motion"
import { Play, Calendar } from "lucide-react"
import { Client } from "../../types"
import Card from "./Card"

interface ClientCardProps {
  client: Client
  onClick: (client: Client) => void
}

export default function ClientCard({ client, onClick }: ClientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card 
        className="p-6 h-full cursor-pointer group" 
        variant="3d" 
        hover={true}
        onClick={() => onClick(client)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{client.name}</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{client.year}</span>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold text-white/90 mb-3">{client.project}</h4>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
            {client.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
              <Play className="h-4 w-4" />
              <span className="text-sm font-medium">Watch Project</span>
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white/50 text-xs">Click to view →</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
} 