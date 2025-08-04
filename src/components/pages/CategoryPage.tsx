"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Client } from "../../types"
import { getClientsByCategory } from "../../utils/clientData"
import ClientCard from "../ui/ClientCard"
import VideoModal from "../ui/VideoModal"

interface CategoryPageProps {
  category: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

export default function CategoryPage({ category, title, description, icon: Icon, gradient }: CategoryPageProps) {
  const navigate = useNavigate()
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const clients = getClientsByCategory(category)

  const handleClientClick = (client: Client) => {
    setSelectedClient(client)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedClient(null)
  }

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

          {/* Client Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ClientCard client={client} onClick={handleClientClick} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {clients.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 mb-4">
                <Icon className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">No projects available yet</p>
                <p className="text-sm">Check back soon for new work</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        client={selectedClient}
      />
    </div>
  )
} 